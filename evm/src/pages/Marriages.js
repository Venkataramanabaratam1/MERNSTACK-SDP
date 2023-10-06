import React from 'react'
import { Button, ButtonGroup } from '@mui/material';
import { useState } from 'react';
import { Marriage} from './Home';
import { Stack } from '@mui/material';
import { Grid } from '@mui/material'
import NavBar from './Navbar';
import '../components/Bring.css';
import ArrowCircleLeftRounded from '@mui/icons-material/ArrowCircleLeftRounded';
function Marriages() {
  const [dept, setDept] = useState(Marriage)
  const changeView = (dep) => { setDept(dep); }
  return (
    <div className="App">
      <div className='events'>
      <NavBar/>
      <br/>
      <Button variant="contained" sx={{ color: 'black', backgroundColor: 'orange' ,position:"relative", right:"700px"}} href='/Events' position='relative' ><ArrowCircleLeftRounded/></Button>
      <Grid 
              container 
              spacing={4} 
              direction="row" 
              justify="flex-start" 
              alignItems="flex-start" 
              gap={5}
          > 
      {Marriage.map((mb) => (<Grid sx={{minWidth: 380, maxHeight: 480, margin: 6, border: '4px outset black', borderRadius: 5, backgroundColor: "tomato", fontFamily:"Times new roman", fontSize:"20px", borderWidth:"3px"}} item xs={12} sm={6} md={3} key={mb.id}>{mb.img}<br/>Name:{mb.name}<br/>Price:{mb.price}<br/> 
      Available: {mb.available 
   ?"Yes" : "No"}<br/><br/>{mb.button}&nbsp;&nbsp;&nbsp;{mb.like}</Grid>))} 
  </Grid>
    </div >
    </div>
  );
}
export default Marriages;