import Movie from "@/model/Movie";
import { connectDb } from "@/utils/dbConnect"
import { NextResponse } from "next/server"

//GET SINGLE MOVIE
export const GET = async(request, {params}) => {
 await connectDb();
 try {
  const single = await Movie.findOne({imdbId : params.movie_id});
  return new NextResponse(JSON.stringify(single), {status:200});
 } catch (error) {
  return new NextResponse(JSON.stringify(error.message), {status:500});
 }
}

//DELETE A SINGLE MOVIE
export const DELETE = async(request, {params}) => {
 await connectDb();

 try {
  const fetchMovie = await Movie.findOne({imdbId: params.movie_id});
  if(!fetchMovie) {
   return new NextResponse(JSON.stringify(`Resource Not Found`), {status:404})
  }
  await Movie.findOneAndDelete({imdbId: params.movie_id});
  return new NextResponse(JSON.stringify(`Resource Successfully Deleted`), {status:404})
 } catch (error) {
  return new NextResponse(JSON.stringify(error.message), {status:500})
  
 }
}

//UPDATE SINGLE MOVIE
export const PUT = async(request, {params}) => {
await connectDb();
 try {
  const req = await request.json();
  const imdbId = params.movie_id;
  // console.log(req , imdbId);
  const fetchedMovie = await Movie.findOne({imdbId : imdbId});

  if(!fetchedMovie) {
   return new NextResponse(JSON.stringify(`Resource Not Found`), {status:404});
  } 
   const updateMovie = await Movie.findOneAndUpdate({imdbId: imdbId}, req,  { new:true})
    return new NextResponse(
      JSON.stringify(updateMovie),
      { status: 201 }
    );
 } catch (error) {
  return new NextResponse(JSON.stringify(error.message) , {status:500})
 }
}