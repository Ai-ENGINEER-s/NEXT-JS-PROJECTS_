import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../[models]/User";
import bcrypt from 'bcrypt'


export const options = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      profile(profile) {
        console.log("Github profile : ", profile);
        let userRole = "Github User";
        if (profile?.email === "barrysanoussa19@gmail.com") {
          userRole = "admin";
        }

        return {
          ...profile,
          role: userRole,
        };
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      profile(profile) {
        console.log("Google profile : ", profile);
        let userRole = "Google User";
       
        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },
    }),

 CredentialsProvider(
  {

    name:"Credentials" , 
    credentials:{

      email:{
        label :"email" , 
        type:'text' , 
        placeholder:'your-email'
      }, 
      password:{
        label :"password" , 
        type:'password' , 
        placeholder:'your-password'
      }, 
 
    }, 

async authorize(credentials){
  try {

const foundUser = await User.findOne({email:credentials.email})
.lean()
.exec() ;
if(foundUser){

  console.log("User Exists") 

  const match = await bcrypt.compare(
    credentials.password, 
    foundUser.password
  ) ; 

  if(match){
    console.log("Good Pass")
    delete foundUser.password

    foundUser["role"] = "Unverified Email user"

    return foundUser 
  }
}
    
  } catch (error) {
    console.log(error)
  }
  return null ; 
}

  }
 )
  ],

 
callbacks: {
async jwt({
 token , user
}){
  if(user) token.role = user.role ; 
  return token ; 
} , 

async session({session , token}){

  if(session?.user) session.user.role = token.role ; 

  return session ; 
}

} , 
  // secret: process.env.NEXTAUTH_SECRET,
};




