import User from "@/model/User";
import { connectDb } from "@/utils/dbConnect"
import { NextResponse } from "next/server";

 export const POST = async (request) => {
  
  await connectDb();
  try {
   const {username, email, password, profile_pic} = await request.json();
   console.log(username)
   console.log(email)
   console.log(password)
   const userExist = await User.findOne({username: username});
   if(userExist) {
    return new NextResponse(JSON.stringify(`Username: ${username} already exists`), {status: 403})
   }
   const new_user = await User.create({username, email, password, profile_pic});
   const register  = await new_user.save();
   return new NextResponse(JSON.stringify(register), { status: 201 });
  } catch (error) {
   return new NextResponse(JSON.stringify(error.message), {status:201})
   
  }
}