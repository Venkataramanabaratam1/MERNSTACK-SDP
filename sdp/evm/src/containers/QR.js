import React from 'react'
import qr from '../pages/img/qr.jpg'
import NavBar from '../pages/Navbar'
import { Button } from '@mui/material';
import ArrowCircleLeftRounded from '@mui/icons-material/ArrowCircleLeftRounded';
function QR() {
  return (
    <div>
        <center>
            <NavBar/><br/><br/>
            <Button variant="contained" sx={{ color: 'black', backgroundColor: 'orange' ,position:"relative", right:"700px"}} href='/Payment' position='relative' ><ArrowCircleLeftRounded/></Button>
     <img src={qr} style={{height:"672px",position:"fixed", top:"75px", left:"500px"}}/></center>
    </div>
  )
}

export default QR