import React, { createContext, useState } from 'react'


const MyFilterContext = createContext();

const FiterContext = ({children}) => {
 const [filter, setFilter] = useState('titleAscending');

  return (
    <MyFilterContext.Provider value={[filter, setFilter]}>
     {children}
    </MyFilterContext.Provider>
  )
}

export default FiterContext