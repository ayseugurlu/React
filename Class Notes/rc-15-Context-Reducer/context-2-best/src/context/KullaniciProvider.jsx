import React, { createContext, useEffect, useState } from 'react'

//! 1- create context
export const KullaniciContext=createContext()

const KullaniciProvider = ({children}) => {

  const [users,setUsers]=useState([])

  useEffect(()=>{fetch("https://api.github.com/users").then((res)=> res.json()).then((data)=>setUsers(data))},[])

  const changeWidth=(id,size)=>{
    setUsers(users.map((a)=> a.id===id ? {...a , width:size}: a))



  }

  
  return (
    <KullaniciContext.Provider value={{users, changeWidth}}>
      {children}
    </KullaniciContext.Provider>
  )
}

export default KullaniciProvider