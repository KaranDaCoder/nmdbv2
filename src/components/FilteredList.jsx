import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { filterMovies } from '@/utils/ApiRequests';
import UserCrudActionButtons from './UserCrudActionButtons';
// import UserCrudActionButtons from './UserCrudActionButtons';



const FilteredList = ({cat, filter , session_status, user_obj}) => {
  const [filteredData, setFilteredData] = useState([]);

  
  useEffect(() => {
    const fetchData =  async() => {
      const fetchedResponse = await filterMovies(`http://localhost:3000/api/movies/${cat}?filter=${filter}`);
      setFilteredData(fetchedResponse)
    }
    fetchData();
  }, [filter]);
  
  //  console.log(`Fitered` , user_obj.user_category.watched);
  return (
    <div className='w-full overflow-hidden'>
      <input placeholder='Search Movie...' />
      <div className='flex flex-col w-full py-1'>
        {filteredData?.map((movie) => (
          <div
            className='w-full flex gap-4 justify-center items-center border py-2'
            key={movie.imdbId}
          >
            <span className='w-1/2 font-semibold'>{movie.title}</span>
            <span className='w-1/12 text-start'>{movie.releasedYear}</span>
            <span className='w-1/12 text-start'>{movie.imdbRating}</span>
            <span className='w-1/12 text-start'>{movie.imdbId}</span>
            {session_status === 'authenticated' ? (
              <UserCrudActionButtons
                isFavorites={
                  user_obj.user_category.favorites.includes(movie._id)
                    ? true
                    : false
                }
                isWatched={
                  user_obj.user_category.watched.includes(movie._id)
                    ? true
                    : false
                }
                isWatchList=
                  {user_obj.user_category.watchlist.includes(movie._id) ? true : false}
                user_obj = {user_obj}
                movie_id = {movie.imdbId}
              />
            ) : (
              <div>Login</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilteredList