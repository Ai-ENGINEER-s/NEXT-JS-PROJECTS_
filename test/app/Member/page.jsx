
import { getServerSession } from 'next-auth'
import Options from '../api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'
const Member = async () => {

const session = await getServerSession(Options)

if(!session){
  redirect("/api/auth/signin?callbackUrl=/Member")
}
  return ( 
    <div>
      <h1>Member Server Session</h1>
 <p>

 User Email : {session?.user?.email } <br/>
 User Role :  {session?.user?.role  }
 </p>
    </div>
  )
}

export default Member