export interface userSession {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
  role?: string | null | undefined;
  username?: string | null | undefined;
}

export interface Profile {
  username: string | undefined;
  description: string | undefined;
  role: string | undefined;
  image: string | undefined | null;
  createdAt: Date | undefined | null;
}
