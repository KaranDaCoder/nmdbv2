import FilteredList from '@/components/FilteredList'
import Sidebar from '@/components/Sidebar'
import React from 'react'


// const fetchMovieListWithCategory = async (category) => {
//   try {
//     const request = await fetch(`http://localhost:3000/api/movies/${category}` , {cache : 'no-store'});
//     if(request.status === 200) {
//       const response = await request.json();
//       return response;
//     } else{
//       return request.status
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

const Category = async ({params}) => {
  // const results = await fetchMovieListWithCategory(params.category);
  // console.log(results.length);
  return (
    <div className='min-h-screen lg:divide-y-reverse w-full flex justify-between flex-col lg:flex-row gap-4'>
      <Sidebar cat={params.category} />

      <FilteredList cat={params.category} />
    </div>
  );
}

export default Category