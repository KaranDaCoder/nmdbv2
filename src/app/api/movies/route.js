import Movie from "@/model/Movie";
import { connectDb } from "@/utils/dbConnect"
import { NextResponse } from "next/server"


//GET ALL MOVIES
export const GET = async (request) => {
 await connectDb();
 try {
  const fetchAllMovies = await Movie.find({});
  return new NextResponse(JSON.stringify(fetchAllMovies), {status:200})
 } catch (error) {
  return new NextResponse(JSON.stringify(error.message), {status:500})
  
 }
}

//CREATE A MOVIE
export const POST = async (request) => {
 await connectDb();
 try {
  const new_movie = await request.json();
  const create = await Movie.create(new_movie);
  const response = await create.save();

  return new NextResponse(JSON.stringify(response), {status:200})
 } catch (error) {
  return new NextResponse(JSON.stringify(error.message), {status:500})
  
 }
}