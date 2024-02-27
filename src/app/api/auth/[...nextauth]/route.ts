import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const githubClientId: string = process.env.GITHUB_ID as string;
const githubClientSecret: string = process.env.GITHUB_SECRET as string;

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: githubClientId,
      clientSecret: githubClientSecret,
    }),
  ],
};

export default NextAuth(authOptions);
