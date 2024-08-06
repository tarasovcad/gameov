import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import type {NextAuthOptions} from "next-auth";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import {db} from "./db";
import {compare} from "bcrypt";
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
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
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        // take user from database
        const existingUser = await db.user.findUnique({
          where: {email: credentials?.email},
        });
        if (!existingUser) {
          return null;
        }
        const passwordMatch = await compare(
          credentials.password,
          existingUser.password,
        );
        if (!passwordMatch) {
          return null;
        }
        return {
          id: existingUser.id as string,
          username: existingUser.username,
          email: existingUser.email,
        };
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
  },
  secret: process.env.NEXTAUTH_SECRET,
};
