import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import type {NextAuthOptions, User} from "next-auth";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import {db} from "./db";
import {compare} from "bcrypt";
import {PrismaClient} from "@prisma/client";
import {Resend} from "resend";
import EmailProvider from "next-auth/providers/email";

const prisma = new PrismaClient();

const resend = new Resend(process.env.RESEND_API_KEY);

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {label: "Email", type: "email", placeholder: "johndoe@mail.com"},
        password: {label: "Password", type: "password"},
      },
      async authorize(credentials) {
        // credentials - input values from SignIn component
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        // take user from database
        const existingUser = await db.user.findUnique({
          where: {email: credentials.email},
        });
        if (!existingUser) {
          return null;
        }
        const passwordMatch = await compare(
          credentials.password,
          existingUser.password as string,
        );
        if (!passwordMatch) {
          return null;
        }
        return {
          id: existingUser.id,
          name: existingUser.name,
          email: existingUser.email,
          image: existingUser.image,
          role: existingUser.role,
          username: existingUser.username,
          provider: "credentials",
        } as User;
      },
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
      sendVerificationRequest: async ({identifier: email, url}) => {
        try {
          const result = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: email,
            subject: "Sign in to Your App",
            html: `<p>Click <a href="${url}">here</a> to sign in.</p>`,
          });
          if (result.error) {
            throw new Error("Failed to send verification email");
          }
        } catch (error) {
          console.error("Error sending verification email:", error);
          throw new Error("Failed to send verification email");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  },
  callbacks: {
    async signIn({user, account, profile}) {
      if (!user.username) {
        switch (account?.provider) {
          case "google":
            user.username = profile?.email?.split("@")[0];
            break;
          // TODO: need to fix this
          // case "github":
          //   user.username = profile.login;
          //   break;
        }
      }
      return true;
    },
    async jwt({token, user, account}) {
      if (user) {
        token.role = user.email === process.env.ADMIN ? "Admin" : "User";
        token.provider = account?.provider || "credentials";
        token.username = user.username;
      }
      return token;
    },

    async session({session, token}) {
      if (session?.user) {
        session.user.role = token.role;
        session.user.username = token.username;
        session.user.provider = token.provider;
      }
      return session;
    },
  },
  pages: {
    signIn: "/signin",
    verifyRequest: "/verify-request",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
};
