import React from "react";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

// setup authentications options for users

export const Options = {
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
    }),

    GoogleProvider({}),
  ],
  callbacks: {},

  pages: {},
  sessions: {},
};
