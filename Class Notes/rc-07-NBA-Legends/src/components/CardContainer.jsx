import React, { useState } from 'react'
import {data} from "../helper/data"
import { Col, Container, Form, Row } from 'react-bootstrap';
import Player from './Player';

const CardContainer = () => {
  const [arama,setArama]=useState("")

//! 1.yol
  // let filtrelenmisData=""
  // filtrelenmisData = data.filter((a)=>a.name.includes(arama))

  console.log(data);
  return (
   
    <>
       {/* input acilacak */} 
       <Form.Control className='w-50 m-auto' type="search" placeholder="Search Player..." onChange={(e)=>setArama(e.target.value)}/>

       <Container className='kart-container rounded-4 my-4 p-3'>
          <Row className='g-3 justify-content-center'>
              {/* {filtrelenmisData.map((player)=>( */}
              {data.filter((abc)=>abc.name.toLowerCase().includes(arama.toLowerCase())).map((player)=>(
                <Col md={6} lg={4} xl={3} key={player.name}>
                  <Player {...player} />
                </Col>
              ))}
          </Row>

       </Container>
    </>
  )
}

export default CardContainer
