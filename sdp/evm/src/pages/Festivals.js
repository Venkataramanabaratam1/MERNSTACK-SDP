import React from 'react'
import { Button } from '@mui/material';
import { useState } from 'react';
import { Holy } from './Holy';
import { Stack } from '@mui/material';
import { Grid } from '@mui/material'
import NavBar from './Navbar';
import ArrowCircleLeftRounded from '@mui/icons-material/ArrowCircleLeftRounded';
import '../components/Bring.css';
function Festivals() {
  const [dept, setDept] = useState(Holy)
  const changeView = (dep) => { setDept(dep); }
  return (
    <div className="App">
      <div className='events'>
      <NavBar/><br/>
      <Button variant="contained" sx={{ color: 'black', backgroundColor: 'orange' ,position:"relative", right:"700px"}} href='/Events' position='relative' ><ArrowCircleLeftRounded/></Button>
      <br/><br/>
      <Grid 
              container 
              spacing={5} 
              direction="row" 
              justify="flex-start" 
              alignItems="flex-start" 
              gap={5}
          > 
      {Holy.map((mb) => (<Grid sx={{ maxWidth: 500, minHeight: 300, margin: 6, border: '4px outset black', borderRadius: 5, backgroundColor: "Yellow", fontFamily:"Times new roman", fontSize:"20px" , borderWidth:"3px"}} item xs={12} sm={6} md={3} key={mb.id}>{mb.img}<br/>Name:{mb.name}<br/>Price:{mb.price}<br/> 
      Available: {mb.available 
   ?"Yes" : "No"}<br/><br/>{mb.button}</Grid>))} 
  </Grid>
    </div >
    </div>
  );
}
export default Festivals;