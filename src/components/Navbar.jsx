'use client';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import MobileNavigation from './MobileNavigation';
import ActionButtons from './ActionButtons';

const Navbar = () => {
  const [drawer, setDrawer] = useState(false);
  return (
    <div className='text-slate-100 bg-slate-900 sticky top-0 z-10 shadow-xl w-full'>
      <div className='h-12 w-full mx-auto container md:h-16 flex px-4 md:px-0 md:justify-between items-center z-10'>
        <div className='flex items-center gap-2'>
          <RxHamburgerMenu
            size={28}
            className='md:hidden block cursor-pointer'
            onClick={() => setDrawer(!drawer)}
          />
          {drawer && <MobileNavigation drawer={true} setDrawer={setDrawer} />}

          <Link
            href={'/'}
            className='text-xl md:text-2xl lg:text-3xl font-semibold md:font-light text-center'
          >
            NextMoviesDb
          </Link>
        </div>

        <div className='hidden md:flex w-full md:space-x-2 lg:space-x-10 justify-center'>
          <Link
            href={'/movies/top-rated-movies'}
            className='lg:text-xl md:text-base font-light'
          >
            Top Rated
          </Link>
          <Link
            href={'/movies/oscar-winning-movies'}
            className='lg:text-lg md:text-base font-light'
          >
            Oscar Winning
          </Link>
          <Link
            href={'/movies/top-indian-movies'}
            className='lg:text-lg md:text-base font-light'
          >
            Top Indian
          </Link>
          <Link
            href={'/movies/worst-ever-movies'}
            className='lg:text-lg md:text-base font-light'
          >
            Worst Ever
          </Link>
        </div>
        <ActionButtons />
      </div>
    </div>
  );
};

export default Navbar;
