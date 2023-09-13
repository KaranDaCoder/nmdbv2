import User from "@/model/User";
import { connectDb } from "@/utils/dbConnect";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import { NextAuthOptions } from "next-auth";



const handler = NextAuth({
 providers: [
  GoogleProvider ({
   clientId : process.env.GOOGLE_CLIENT_ID,
   clientSecret : process.env.GOOGLE_CLIENT_SECRET,
  })
 ] , 
 callbacks : {
  async session({session}) {
   const userSession = await User.findOne({email : session.user.email});
   console.log(`SESSION FETCHED FROM NEXT-AUTH : ${JSON.stringify(session)}`);
   session.user.username = userSession.username.toString();
   return session;
  },
  async signIn({account, user, credentials, profile}) {
   try {
    await connectDb();
    console.log(account, user , profile , credentials);
    const formattedUname = profile.email.toLowerCase().split('@')[0];
    const userExist = await User.findOne({email : profile.email});
    if(!userExist) {
     let register_user = {
       email: profile.email,
       username: formattedUname,
       password: profile?.password || profile.at_hash,
       profile_pic: profile.picture ? profile.picture : profile.profile_pic,
     };
     await User.create(register_user);
    }
    return true;
   } catch (error) {
       console.log(`Error Next-Auth User Exists/Register: ${error}`);
       return false;
   }
  },
 }, 
 pages:{
  error: '/auth'
 }
})

export {handler as GET, handler as POST};