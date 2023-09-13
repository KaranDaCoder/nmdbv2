import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MovieCard = ({movie, index}) => {
  return (
    <Link
      href={''}
      className='col-span-1 h-[100px] lg:h-[450px] md:h-[250px] shadow-md rounded-xl ring-1 ring-slate-600/20'
    >
      <div className='flex lg:flex-col md:flex w-full h-full'>
        <div className='relative lg:h-5/6 md:w-1/2 md:h-full lg:w-full'>
          <Image
            src={movie?.poster_path}
            fill
            alt={''}
            className='rounded-t-md mix-blend-luminosity hover:mix-blend-normal brightness-75'
          />
        </div>
        <div className='flex w-full items-center justify-center lg:items-center lg:justify-center md:items-center md:justify-start mt-2'>
          {/* <span className='text-4xl text-slate-500 font-extrabold'>{index + 1}</span> */}
          <span className='text-lg truncate text-slate-800'>
            {movie?.title}
          </span>
        </div>
        <div className='flex w-full justify-center items-center gap-1 m-1 text-sm text-slate-700'>
          <span className=''>{movie?.releasedYear} |</span>
          <span className='text-sm'>{movie?.genres[0]} |</span>
          <span className=''>{movie?.imdbRating}</span>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard