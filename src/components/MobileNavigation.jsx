"use client";
import Link from 'next/link'
import React from 'react'
import { signOut, useSession } from 'next-auth/react';

const MobileNavigation = ({drawer, setDrawer}) => {
  const {status} = useSession();
 console.log(`Drawer from Mobile-Nav : ${drawer}`)
  return (
    <div className='w-3/4 h-[calc(100vh-10rem)] absolute bg-slate-800 rounded-br-xl text-slate-100 top-[3rem] md:hidden md:top-[4rem] left-0'>
      <div className='w-full h-full px-4 gap-4 flex flex-col'>
        <h2 className='text-end text-xl font-bold mt-2'>X</h2>
        <div className='shadow-2xl rounded-md flex flex-col items-center py-2 space-y-2 bg-white text-slate-900 p-2'>
          <h2 className='text-center font-bold uppercase'>BROWSE ALL</h2>
           <div className='flex w-full flex-col items-center space-y-1 divide-y font-light text-lg' onClick={() => setDrawer(false)}>
            <Link href={'/movies/top-rated-movies'} className='w-full capitalize'>
              Top Rated Movies
            </Link>
            <Link href={'/movies/most-popular-movies'} className='w-full capitalize'>
              Most Popular Movies
            </Link>
            <Link href={'/movies/top-indian-movies'} className='w-full capitalize'>
              Top Indian Movies
            </Link>
            <Link href={'/movies/worst-ever-movies'} className='w-full capitalize'>
              Worst Movies Ever!
            </Link>
          </div>
        </div>
        {status === 'authenticated' && <div className='shadow-2xl rounded-md flex flex-col items-center py-4 space-y-2 bg-white text-slate-900' onClick={() => setDrawer(false)}>
          <h2 className='text-center font-bold uppercase'>My STUFF</h2>
          <div className='flex w-full flex-col space-y-1 divide-y font-light text-lg p-2'>
            <Link href={'/'} className='w-full capitalize'>
             Favorites
            </Link>
            <Link href={'/'} className='w-full capitalize'>
              Watched
            </Link>
            <Link href={'/'} className='w-full capitalize'>
              Watchlist
            </Link>

            <Link href={'/'} className='w-full'>
              My Profile
            </Link>
          </div>
        </div>}
      </div>
    </div>
  );
}

export default MobileNavigation