import React, { useEffect, useState } from 'react'
import axios from "axios";
const People = () => {
const[people,setPeople]=useState([])


//!1.yol fetch then yapısı

// useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((veri)=> setPeople(veri))
// },[])

//!2.yol async await

// const getir= async()=>{

// const res=  await fetch("https://jsonplaceholder.typicode.com/users");

//   const veri=   await res.json()

// setPeople(veri)
// }

// useEffect(()=>{
//     getir()
// },[])



//!3. yol axios 

useEffect(()=>{

 axios.get("https://jsonplaceholder.typicode.com/users").then((res)=> setPeople(res.data))

},[])





// console.log("merhaba");

return (
  <div className='container text-center mt-4'>
    <div className='row'>
      {people.map(({ id, name, username, phone }) => (
        <div className='col-12 col-sm-6 col-md-4 col-lg-3' key={id}>
          {/* https://www.dicebear.com/styles/avataaars/ */}

          <img
            src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${name}`}
            alt=""
          />

          <h5>{name}</h5>
          <h6>{username} </h6>
          <h4>{phone} </h4>
        </div>
      ))}
    </div>
  </div>
);
}

export default People