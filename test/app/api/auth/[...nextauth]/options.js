import React from "react";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

// setup authentications options for users

const Options = {
  providers: [
    GithubProvider({
      profile(profile) {
        console.log("Profile Github : ", profile);

        let userRole = "Github User";
        if (profile?.email == "barrysanoussa19@gmail.com") {
          userRole = "admin";
        }
        return {
          ...profile,
          role: userRole,
        };
      },

      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    GoogleProvider({
      profile(profile) {
        console.log("Profile Google : ", profile);
        let userRole = "Github User";

        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET_ID,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },

    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;

      return session;
    },
  },
};
export default Options;
