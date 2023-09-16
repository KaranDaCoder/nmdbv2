import User from "@/model/User"
import { NextResponse } from "next/server";

export const GET = async (request, {params}) => {
 try {
  const fetchedUser = await User.findOne({username:params.user_name});
  return new NextResponse(JSON.stringify(fetchedUser), {status:200}) 
 } catch (error) {
  return new NextResponse(JSON.stringify(error.message), {status:500}) 
  
 }
}