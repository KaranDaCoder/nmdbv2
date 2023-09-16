'use client';
import React, { useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const SidebarSort = ({setFilter }) => {
  const [sortDrawer, setSortDrawer] = useState(false);
  return (
    <div className='h-4/5 w-full py-2 bg-white ring-1 outline-none ring-slate-600/20 shadow-lg rounded-sm mt-2 px-2 border divide-y'>
      <h2
        className='cursor-pointer font-semibold text-lg mb-2 flex justify-between items-center'
        onClick={() => setSortDrawer(!sortDrawer)}
      >
        Filter <AiOutlineRight size={20} />
      </h2>
      {sortDrawer && (
        <div className='w-full'>
          <div className='w-full h-full flex flex-col'>
            <select
              name=''
              id=''
              className='border-none outline-none cursor-pointer'
              onChange={(e) => setFilter(e.target.value)}
            >
              <option
                value='titleDescending'
                className='outline-none border-none'
              >
                Title Descending
              </option>
              <option
                value='titleAscending'
                className='outline-none border-none'
              >
                Title Ascending
              </option>
              <option
                value='ratingAscending'
                className='outline-none border-none'
              >
                Rating Ascending
              </option>
              <option
                value='ratingDescending'
                className='outline-none border-none'
              >
                Rating Descending
              </option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarSort;
