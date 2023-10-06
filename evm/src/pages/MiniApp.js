import React from 'react'
import Chat from './Chat';
import Nav from './Nav';
import NavBar from './Navbar';
import '../components/Bring.css';
import TextTrans from '../components/TextTrans';
import event from './img/event.jpg'
import SDP from '../components/images/SDP.mp4'
import Footer from '../images/Footer';
function MiniApp() {
  return (
    <div>
    <div class="module mid" >
     <NavBar style={{position: 'fixed'}}/><Nav style={{position: 'fixed'}}/>
     <br/><br/>
     <center>
      <div id='outer'>
     <video src={SDP} width={800} autoPlay loop muted/> 
     </div>
     </center>
    </div>
    <Footer/>
    </div>
  );
}

export default MiniApp