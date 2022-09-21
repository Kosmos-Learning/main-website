import React, { useState } from "react";
import { Typography, Grid, CssBaseline, Paper, Box,
          FormGroup, FormControlLabel, Radio, Stack, RadioGroup, FormControl,
          FormLabel, Divider, Container, Button, ButtonGroup, TextField, InputLabel,
          Input, InputAdornment, IconButton, FilledInput } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const theme = createTheme({
  palette: {
    black: {
      main: '#111'
    },
  },
});

const Home = () => {
    const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <ThemeProvider theme={theme}>
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid item
        xs={false}
        sm={4}
        md={5}
        sx={{
          background: "green",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
     
      <Grid item xs={12} sm={8} md={7} component={Container}>
        <Box
          sx={{
              my: 8,
              mx: 20,
              display: 'flex',
              flexDirection: 'column',
            }}
        >
         <Typography component="h1" variant="h5">Sign up</Typography>
        
      <FormControl sx={{ py: 1.5 }}>
        <FormLabel id="checkbox" sx={{ pb: 1 }}>Are you a</FormLabel>
          <RadioGroup row defaultValue="Tutor"
             sx={{
              display: 'flex',
              gap: 4
             }}
          >
          <Paper>
            <FormControlLabel value="Tutor" control={<Radio />} label="Tutor"
              sx={{
                px: 5,
              }}
            />
          </Paper>
          <Paper>
            <FormControlLabel value="Student" control={<Radio />} label="Student" sx={{
                px: 5,
              
              }}/>
          </Paper>
        </RadioGroup>
      </FormControl>

        <Divider sx={{ m: 3 }} />

        <Stack spacing={2}>
          <Button variant="outlined" color="black" startIcon={<FcGoogle />}>Sign up with Google</Button>
          <Button variant="outlined" color="black" startIcon={<BsFacebook />}>Sign up with Facebook</Button>
        </Stack>

        <Divider sx={{ m: 3, fontSize: 11 }}>OR</Divider>

        <Typography component="h4" variant="h6" align="center">Sign up with your Email Address</Typography>
          <TextField
                margin="normal"
                id="name"
                label="Full Name"
                name="name"
                autoFocus
              />
              <TextField
                margin="normal"
                id="email"
                label="Email Address"
                name="email"
                autoFocus
              />
              
               <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <TextField
                margin="normal"
                name="password"
                label="Confirm Password"
                type="password"
                id="password"
              />
        </Box>
      </Grid>
    </Grid>
    </ThemeProvider>
  )
}

export default Home;