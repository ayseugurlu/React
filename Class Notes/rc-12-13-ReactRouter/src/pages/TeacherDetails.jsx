import React from 'react'
import { useParams } from 'react-router-dom'
import  { useEffect, useState } from "react";
import axios from "axios";

const TeacherDetails = () => {

    //! 1.yol
    const {id}=useParams()
    // path ile yollanan id yi useParams hook ile yakaladik

    const [person, setPerson] = useState({});
 useEffect(() => {
   axios
     .get(`https://jsonplaceholder.typicode.com/users/${id}`)
     .then((res) => setPerson(res.data));
 }, [id]);


  return (
    <div>
        <h3>{person.name}</h3>
        <h2>{person.email}</h2>
    </div>
  )
}

export default TeacherDetails