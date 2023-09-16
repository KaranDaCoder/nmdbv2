import React, { useState } from 'react'
import SidebarSort from './SidebarSort';

const Sidebar = ({cat , setFilter}) => {
 
  return (
    <div className='h-3/6 lg:w-1/4 lg:h-screen'>
      <div className='h-auto w-full flex flex-col'>
        <h1 className='text-xl font-semibold capitalize'>
          {cat.replaceAll('-', ' ')}
        </h1>
        <SidebarSort setFilter={setFilter} />
        <button className='py-2 border mt-4 shadow-sm rounded-sm'>Apply</button>
      </div>
    </div>
  );
}

export default Sidebar