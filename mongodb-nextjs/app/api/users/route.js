import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt' ; 
import connectionToDatabase from "@/utils/mongodb";


export async function POST(request){

try {
    connectionToDatabase() ;
    const  {name , email , password} = await request.json() ; 
    const userAlreadyExist = User.find({email}); 

    if(userAlreadyExist){
        return NextResponse.json({error : "user already exist"})
    }


    const hashPassword = await bcrypt.hash(password, 10) ; 

    const newUser = new User({
        name ,
         email,
         password:hashPassword
    })

    await newUser.save(); 
    return newUser.json({message :"User Registered" , status:201})
    
} catch (error) {
    
    return NextResponse.json({error:"Error in Server" , status:500})
}

}