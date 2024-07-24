import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import  { useEffect, useState } from "react";
import axios from "axios";
import NotFound from './NotFound';

const TeacherDetails = () => {

    //! 1.yol *************
//     const {id}=useParams()
//     // path ile yollanan id yi useParams hook ile yakaladik

//     const [person, setPerson] = useState({});
//     const [error,setError]=useState(false)
//  useEffect(() => {
//    axios
//      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
//      .then((res) => setPerson(res.data)).catch((err)=>setError(true))
//  }, [id]);

// //! ******************

//! 2.Yol
const {state:{person}}=useLocation()

  // error durumlarında alttaki gibi js alanına yazılarak error sayfasına yönlendirme  yapılabilir
// if(error){
//   return <NotFound/>
// }

  return (
    <div className='container text-center mt-4'>
    <img src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${person.name}`} alt="" />
        <h3>{person.name}</h3>
        <h2>{person.email}</h2>
        <h5>{person.email}</h5>
        <h6>{person.phone}</h6>
    </div>
  )
}

export default TeacherDetails