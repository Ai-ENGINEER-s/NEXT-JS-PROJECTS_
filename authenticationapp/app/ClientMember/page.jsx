"use client" ; 
import React from 'react' ; 
import {useSession} from 'next-auth/react' ; 
import { redirect } from 'next/dist/server/api-utils';

const Member = async () => {
const {data :session} =  useSession({

  required:true , 
  onUnauthenticated(){

    redirect("/api/auth/sigin?callbackUrl=/ClientMember")
  }
})
  return (
<div>
<h1>

Member Client Session 

</h1>
 </div>
  )
}


export default Member