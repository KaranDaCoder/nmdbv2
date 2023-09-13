import Movie from "@/model/Movie";
import { connectDb } from "@/utils/dbConnect";
import { NextResponse } from "next/server";


export const GET = async(request, {params}) => {
  await connectDb();
let {category} = params;
if(category === 'top-rated-movies') {
 category = 'topRatedMovie';
}
if(category === 'most-popular-movies') {
 category = 'mostPopularMovie'
}
if(category === 'oscar-winning-movies') {
 category = 'oscarWinnerMovie';
}
if(category === 'top-indian-movies') {
 category = 'topIndianMovie'
}
if(category === 'worst-ever-movies'){
  category = 'worstAllTime';
}
 try {
   const fetchedWithCategory = await Movie.find({global_category : category});
   return new NextResponse(JSON.stringify(fetchedWithCategory), {status:200})
  } catch (error) {
  return new NextResponse(JSON.stringify(error.message), {status:500})
  
 }
}