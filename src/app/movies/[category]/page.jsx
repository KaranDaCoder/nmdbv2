"use client";
import FilteredList from '@/components/FilteredList'
import Sidebar from '@/components/Sidebar'
import { useFilterContext } from '@/app/contexts/FiterContext';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const fetchUserObj = async(username) => {
  try {
    const request = await fetch(`http://localhost:3000/api/users/${username}`);
    const response = await request.json();
    return response;
  } catch (error) {
    console.log(error);
  }
}

const Category =  ({params}) => {
  const {filter, setFilter} = useFilterContext();
  const [userData, setUserData] = useState({})

  const {status, data} = useSession();
  useEffect(()=> {
      const getUserObject = async () => {
      if(status === 'unauthenticated' || status==='loading') {
        setUserData([]);
      } else {
        const returnUserObj = await fetchUserObj(data?.user?.username);
        setUserData(returnUserObj);
      }
    }
    getUserObject();
  }, [data?.user?.username])
  console.log(userData)
  return (
    <div className='min-h-screen  w-full flex justify-start flex-col lg:flex-row gap-4'>
      <Sidebar cat={params.category}  setFilter={setFilter}/>
      <FilteredList
        cat={params.category}
        filter={filter}
        session_status = {status}
        user_obj = {userData}
      />
      
    </div>
  );
}

export default Category