import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import useStockCall from "../../hooks/useStockCall";

const btnStyle = { cursor: "pointer", "&:hover": { color: "red" } };

export default function FirmCard({ _id, name, phone, address, image,handleOpen,setInitialState }) {
  const {deleteStockData} = useStockCall()
  return (
    <Card
      sx={{
        height: 390,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "0.5rem",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {address}
        </Typography>
      </CardContent>
      <CardMedia
        sx={{ height: 140, objectFit: "contain" }}
        image={image}
        component="img"
        title={name}
      />
      <CardContent>
        <Typography variant="body2">Phone: {phone}</Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: "center", gap: 2 }}>
        <EditIcon sx={btnStyle} onClick={()=>{
          handleOpen();
          setInitialState({_id, name, phone, address, image})
          }} />
        <DeleteIcon onClick={()=>deleteStockData("firms",_id)} sx={btnStyle} />
      </CardActions>
    </Card>
  );
}
