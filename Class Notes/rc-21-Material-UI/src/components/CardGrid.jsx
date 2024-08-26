import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const CardGrid = () => {

  const [products,setProducts]=useState([])

  useEffect(()=>{

     fetch("https://dummyjson.com/products").then((res)=>res.json()).then((data)=>setProducts(data.products))
  },[])
 
  return (
    <Container>
        <Typography variant='h4' align='center' color="error">
          CARD-GRID
        </Typography>

        <Grid container spacing={3}>
          {products.map((a)=>(
            <Grid item key={a.id} xs={6} md={4} >

            <Card sx={{ maxWidth: 345 ,height:450 }}>
      <CardMedia
        sx={{ height: 140, padding:"3rem" }}
        image={a.images}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {a.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {a.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant='contained'>Share</Button>
        <Button size="small" variant='contained' color="error">Learn More</Button>
      </CardActions>
    </Card>


            </Grid>
          ))}

        </Grid>
    </Container>
  )
}

export default CardGrid