import Image from 'next/image';
import React from 'react'
// import MovieCard from './MovieCard';




const FilteredList = ({cat, results}) => {
  return (
    <div className='w-full min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-2'>
      {/* {results?.map((movie,index) => (
        <MovieCard movie={movie} index={index}/>
      ))} */}
    
    </div>
  );
}

export default FilteredList