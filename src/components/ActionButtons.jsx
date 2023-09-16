import { signOut, useSession } from 'next-auth/react';

import Link from 'next/link';
import React from 'react'

const ActionButtons = () => {


  const { status , data } = useSession();
  console.log(data)
  console.log(status);

  return (
    <div className='hidden md:flex'>
      {status === 'authenticated' ? (
        <div className='flex space-x-4'>
          <div className='flex gap-2'>
          <p>image</p>
          <span>{data?.user?.username}</span>
          </div>
          <button onClick={() => signOut()}>Logout</button>
        </div>
      ) : (
        <div>
          <Link href='/auth'>Login/Signup</Link>
        </div>
      )}
    </div>
  );
}

export default ActionButtons