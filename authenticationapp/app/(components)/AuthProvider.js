"use client"; 

import { SessionProvider } from "next-auth/react";



const AuthProvider = ({children})=>{

return <SessionProvider>
{children}
</SessionProvider>


}

export default AuthProvider 



// "use client";

// import { SessionProvider } from "next-auth/react";

// const AuthProvider = ({ children }) => {
//   return <SessionProvider>{children}</SessionProvider>;
// };

// export default AuthProvider;
