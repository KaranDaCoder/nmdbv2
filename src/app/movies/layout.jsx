import React from 'react'

const layout = ({children}) => {
  return (
    <div className='bg-white min-h-screen text-slate-950 py-4 px-4 md:px-0'>{children}</div>
  );
}

export default layout