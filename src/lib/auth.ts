import GoogleProvider from "next-auth/providers/google";
import type {NextAuthOptions} from "next-auth";
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
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
  secret: process.env.NEXTAUTH_SECRET,
};
