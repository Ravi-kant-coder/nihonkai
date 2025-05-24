import NextAuth from "next-auth";

export const { handlers, SignIn, SignOut, auth } = NextAuth({ providers: [] });
