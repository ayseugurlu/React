import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const CardDetails = () => {
    const navigate=useNavigate()
    //butonlarda navigate yi kullanacagim

    const {state:{a}}=useLocation()
  return (
    <div className='container text-center mt-4'>
       <div>
        <h3>{a.name}</h3>
        <img src={a.img} alt="" width="400px" />
        <h3>{a.text}</h3>
        <h4 className='text-danger'>{a.yorum}</h4>
       </div>

       <div>
        <button onClick={()=>navigate(-1)} className='btn btn-warning mx-3'>Go Back</button>
        <button onClick={()=>navigate("/")} className='btn btn-primary'>Go Home</button>
       </div>

    </div>
  )
}

export default CardDetails