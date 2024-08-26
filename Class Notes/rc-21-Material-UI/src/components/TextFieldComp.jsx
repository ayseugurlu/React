import {
  
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  TextField,
  Typography,
 
} from "@mui/material";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const TextFieldComp = () => {
  let errorr = false;

  const [show,setShow]=useState(false)

  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];

  return (
    <div>
      <Container sx={{ marginTop: 4 }}>
        <Typography variant="h4">TEXT-FIELD (input)</Typography>

        <Box sx={{ mt: 4 }}>
          {/* margin="dense"=  az bir margin verir */}
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="email giriniz"
            margin="dense"
          />

          <TextField
            required
            id="filled-required"
            label="Filled"
            defaultValue="Hello World"
            variant="filled"
            margin="normal"
          />

          <TextField
            error={errorr}
            id="filled-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText={errorr && "yanlış girdiniz"}
            variant="filled"
            fullWidth
          />

          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            defaultValue="EUR"
            helperText="Please select your currency"
            margin="normal"
          >
            {/* https://mui.com/material-ui/react-select/ */}
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          {/* text-fields icon */}

          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              type={show ? "text" : "password"}
              id="outlined-adornment-password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                    onClick={() => setShow(!show)}
                  >
                    {show ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <Button fullWidth variant="contained" color="warning" sx={{gap:3}}>
              SUBMIT <Avatar src="https://cdn.pixabay.com/photo/2019/11/29/21/30/girl-4662158_1280.jpg"/>

          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default TextFieldComp;
