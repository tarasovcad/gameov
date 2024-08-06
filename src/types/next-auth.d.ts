import NextAuth, {User, type DefaultSession} from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
      role?: string;
      username?: string;
      provider?: string;
    };
  }
  interface User {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
    role?: string;
    username?: string;
    provider?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
    username?: string;
    provider?: string;
  }
}
