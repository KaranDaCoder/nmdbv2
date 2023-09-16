"use client"
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'


// const handleWatchedToggle = async () => {
//  const data = 'karanskhot';
//  try {
//   const getUserWatchedMovies = await fetch(
//     `http://localhost:3000/api/users/${data}/watched`,
//     { cache: 'reload' }
//   );
//   const response = await getUserWatchedMovies.json();
//   return response;
//  } catch (error) {
//   console.log(error)
//  }
// };


const UserCrudActionButtons = ({isFavorites, isWatched, isWatchedList , user_obj , movie_id}) => {
 // console.log(movie_id, user_data);

 const [userData, setUserData] = useState([]);
 const [favorites, setFavorites] = useState(isFavorites);
   const [watched, setWatched] = useState(isWatched);
   const [watchList, setWatchList] = useState(isWatchedList);
   const [success, setSuccess] = useState(false);
   const [error, setError] = useState(false)
   console.log(user_obj)

 const toggleUserCategory = async (user_category) => {
   if (user_category === 'favorites') {
     setFavorites(!favorites);
     if (favorites) {
       const removeFav = await fetch(
         `http://localhost:3000/api/users/${user_obj?.username}/favorites`,
         { method: 'DELETE', body: JSON.stringify({ movie_id }) }
       );
       if (!removeFav.ok) {
         setError(true)
         setSuccess(false)
       } else {
        setError(false)
        setSuccess(true)
       }
     } else {
       const addFav = await fetch(
         `http://localhost:3000/api/users/${user_obj?.username}/favorites`,
         { method: 'POST', body: JSON.stringify({ movie_id }) }
       );
        if (!addFav.ok) {
          setError(true);
          setSuccess(false);
        } else {
          setError(false);
          setSuccess(true);
        }
     }
   } else if (user_category === 'watched') {
     setWatched(!watched);
   
     if (watched) {
       const remove = await fetch(
         `http://localhost:3000/api/users/${user_obj?.username}/watched`,
         { method: 'DELETE', body: JSON.stringify({ movie_id }) }
       );
       if (!remove.ok) {
         setError(true);
         setSuccess(false);
       } else {
         setError(false);
         setSuccess(true);
       }
     } else {
       const add = await fetch(
         `http://localhost:3000/api/users/${user_obj?.username}/watched`,
         { method: 'POST', body: JSON.stringify({ movie_id }) }
       );
       if (!add.ok) {
         setError(true);
         setSuccess(false);
       } else {
         setError(false);
         setSuccess(true);
       }
     }
   } else if (user_category === 'watchlist') {
     setWatchList(!watchList);
   }
 };

  return (
  <div className='w-1/2 flex text-base gap-2 items-center justify-start flex-wrap'>
      <button
        type='submit'
        className='ring-1 text-[14px] ring-slate-600/20 py-1 px-3 rounded-md'
        onClick={() => toggleUserCategory('favorites')}
      >
        {favorites ? 'Favorites-Remove' : 'Favorites-Add'}
      </button>
      <button
        type='submit'
        className='ring-1 text-[14px] ring-slate-600/20 py-1 px-3 rounded-md'
        onClick={() => toggleUserCategory('watched')}
      >
        {watched ? 'Watched-Remove' : 'Watched-Add'}
      </button>
      <button
        type='submit'
        className='ring-1 text-[14px] ring-slate-600/20 py-1 px-3 rounded-md'
        onClick={() => toggleUserCategory('watchlist')}
      >
        {watchList ? 'WatchList-Remove' : 'WatchList-Add'}
      </button>
    </div>
  );
}

export default UserCrudActionButtons