import Movie from "@/model/Movie";
import { connectDb } from "@/utils/dbConnect";
import { NextResponse } from "next/server";


export const GET = async(request, {params}) => {
 const url = new URL(request.url);
 const filter = url.searchParams.get("filter");
 console.log(filter)

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
   await connectDb();
   let fetchedWithCategory = await Movie.find({ global_category: category });
   if(filter === 'ratingAscending'){
      const fetchedWithCategory = await Movie.find({global_category : category}).sort({imdbRating : 1});
         return new NextResponse(JSON.stringify(fetchedWithCategory), {
           status: 200,
         });

    }
    if(filter === 'ratingDescending') {
      const fetchedWithCategory = await Movie.find({global_category : category}).sort({imdbRating : -1});
         return new NextResponse(JSON.stringify(fetchedWithCategory), {
           status: 200,
         });


   }
   return new NextResponse(JSON.stringify(fetchedWithCategory), {status:200})
  } catch (error) {
  return new NextResponse(JSON.stringify(error.message), {status:500})
  
 }
}


