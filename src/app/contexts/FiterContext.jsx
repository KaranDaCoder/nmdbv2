"use client"
import React, { createContext, useContext, useState } from 'react'

const MyFilterContext = createContext();

const FiterContext = ({children}) => {
 const [filter, setFilter] = useState('ratingDescending')

  return (
    <MyFilterContext.Provider value={{filter, setFilter}}>
      {children}
    </MyFilterContext.Provider>
  );
}

export const useFilterContext = () => useContext(MyFilterContext)

export default FiterContext