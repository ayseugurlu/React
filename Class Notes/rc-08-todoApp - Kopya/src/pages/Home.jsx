import React, { useState } from 'react'
import Data from "../helper/data"
import TodoGoster from '../components/TodoGoster'
import TodoEkle from '../components/TodoEkle'

const Home = () => {

    const [doing,setDoing]=useState(JSON.parse(localStorage.getItem("todoList")) || Data)
  return (
    <div>
        <TodoEkle doing={doing} setDoing={setDoing}/>
        <TodoGoster doing={doing} setDoing={setDoing}/>
    </div>
  )
}

export default Home