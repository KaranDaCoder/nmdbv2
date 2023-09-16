import Movie from "@/model/Movie";
import User from "@/model/User";
import { connectDb } from "@/utils/dbConnect"
import { NextResponse } from "next/server";

export const GET = async(request, {params}) => {
try {
 await connectDb();
 const isUserSession = await User.findOne({username : params.user_name.toString()});
 if(!isUserSession) {
  return new NextResponse(JSON.stringify(`Error : User Session is Not Found, Ask User To Login`), {status:404})
 }
 const populateUsersList = await User.findOne({username: params.user_name.toString()}).populate(`user_category.${params.user_category}`)
 return new NextResponse(JSON.stringify(populateUsersList), {status:200})
} catch (error) {
 console.log(error)
 return new NextResponse(JSON.stringify(error), {status:500})
}
}


export const POST  = async (request, {params}) => {
 const {user_name, user_category} = params;
 const {movie_id} = await request.json();
try {
 await connectDb();
 console.log(`For User : ${user_name}, Add : ${movie_id} to Category : ${user_category}`)
 const isUserSession = await User.findOne({ username: user_name.toString() });
 if (!isUserSession) {
   return new NextResponse(
     JSON.stringify(`Error : User Session is Not Found, Ask User To Login`),
     { status: 404 }
   );
 }

 const fetchedMovie = await Movie.findOne({imdbId : movie_id.toString()});
  if (!fetchedMovie) {
    return new NextResponse(
      JSON.stringify(`Error : Movie with ${movie_id} is Not Found!`),
      { status: 404 }
    );
  }

  const addMovieToCategory = await User.findOneAndUpdate({username:user_name} , {
   $addToSet: {[`user_category.${user_category}`] : fetchedMovie._id.toString()}
  } , {new:true})

 return new NextResponse(JSON.stringify(addMovieToCategory), {status:200})
} catch (error) {
 console.log(error)
 return new NextResponse(JSON.stringify('Failed'), {status:500})
}

}



export const DELETE = async (request, { params }) => {
  const { user_name, user_category } = params;
  const { movie_id } = await request.json();
  try {
    await connectDb();
    console.log(
      `For User : ${user_name}, REMOVE : ${movie_id} FROM Category : ${user_category}`
    );
    const isUserSession = await User.findOne({
      username: user_name.toString(),
    });
    if (!isUserSession) {
      return new NextResponse(
        JSON.stringify(`Error : User Session is Not Found, Ask User To Login`),
        { status: 404 }
      );
    }

    const fetchedMovie = await Movie.findOne({ imdbId: movie_id.toString() });
    if (!fetchedMovie) {
      return new NextResponse(
        JSON.stringify(`Error : Movie with ${movie_id} is Not Found!`),
        { status: 404 }
      );
    }

    const removeFromCategory = await User.updateOne(
      { username: user_name },
      {
        $pull: {
          [`user_category.${user_category}`]: fetchedMovie._id.toString(),
        },
      },
      { safe: true, multi:false }
    );

    return new NextResponse(JSON.stringify(removeFromCategory), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify('Failed'), { status: 500 });
  }
};