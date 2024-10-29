import mongoose, { Schema } from "mongoose";

// const connectedToDatase = async () => {
//   response = await mongoose.connect(process.env.MONGODB_URI);
//   console.log("connected to db successfully " , response.json())
// };


mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise; 
const userSchema = new Schema(
    {

        name:String , 
        email : String , 
        password : String 
    } , 
{

    timestamps : true , 
}

) ; 


const User = mongoose.models.User || mongoose.model("User" , userSchema)


export default User ; 