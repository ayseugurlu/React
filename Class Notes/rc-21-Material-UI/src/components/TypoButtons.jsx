import { Container, Typography, Box, Button } from '@mui/material'
import React from 'react'
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";

const TypoButtons = () => {
  return (
    <div>
      <Container maxWidth="md">
      {/* maxWidth="md" width en fazla md büyüklükte olsun.  gutterBottom={true}
      alttan margin. component attribute ü  sadece console da etkilidir , görüntü yine variant neyse odur*/}
        <Typography variant='h1' component="h3" gutterBottom align='center' color="error" sx={{background:"#eee", mt:4, border:"1px solid red"}}>
          Typography Container Box Button
        </Typography>

        <Typography variant='button'>bu bir span dir</Typography>
        <Typography variant='body1'>Bu bir p dir</Typography>
        <Typography variant='body2'>Bu bir p dir ama font 14 px</Typography>
      </Container>

      <Box sx={{display:"flex", flexDirection:"column", marginTop:4, gap:2  }}>
        <Button variant='outlined' color='error' startIcon={<DeleteIcon/>}>DELETE</Button>
        <Button variant='contained' color='success' endIcon={<SendIcon/>}>SEND</Button>

      </Box>
    </div>
  )
}

export default TypoButtons