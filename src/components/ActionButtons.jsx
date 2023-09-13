import { signOut, useSession } from 'next-auth/react';

import Link from 'next/link';
import React from 'react'

const ActionButtons = () => {


  const { status } = useSession();
  console.log(status);

  return (
    <div className='hidden md:flex'>
      {status === 'authenticated' ? (
        <div className='flex space-x-4'>
          <div className='flex'>
          <p>image</p>
          <span>{status}</span>
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