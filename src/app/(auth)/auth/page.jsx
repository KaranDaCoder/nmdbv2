"use client";
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import {FcGoogle} from 'react-icons/fc'


const LoginRegister = () => {
  const {status} = useSession();
  const router = useRouter();

  useEffect(()=> {
    const handleSession = async() => {
      console.log(status);
      if(status === "authenticated") {
        console.log("User is already Logged In");
        router.push("/");
      }
    }
    handleSession();
  }, [status])

  
return (
  
  <div className='h-[50vh] w-full'>
     {status === 'loading' ? <p>Loading...</p> :  <div className='h-full w-full lg:flex justify-between gap-4 p-10'>
        <div className='w-full lg:w-1/2 flex flex-col gap-2 shadow-lg rounded-lg py-4'>
          <h2 className='text-center text-xl lg:text-2xl'>LOGIN</h2>
          <div className='flex flex-col items-center space-y-2'>
            <button
              onClick={() => signIn('google')}
              className='flex items-center gap-2 bg-slate-100 rounded-sm shadow-sm px-3 py-2'
            >
              <FcGoogle size={25} /> Sign In With Google
            </button>
            <button> Sign In With NMDb</button>
          </div>
        </div>
        <p className='text-center'>OR</p>
        <div className='w-full lg:w-1/2 border'>REgister</div>
      </div>}
  </div>

);
}

export default LoginRegister;