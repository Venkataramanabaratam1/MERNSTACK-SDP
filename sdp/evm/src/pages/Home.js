import Button from '@mui/material/Button';
import engagement from './images/Engagement.jpg'
import haldi from './images/haldi.jpg'
import mehendi from './images/Mehendi.jpg'
import reception from './images/reception.jpg'
import roka from './images/roka.jpg'
import sangeet from './images/sangeet.jpeg'
import React from "react";
export const Marriage = [{ 
  img:<img src={engagement} width="300" height="200" style={{border:'5px outset yellow', borderRadius: '20px', borderWidth:"5px"}}/>, 
  uuid:1, 
  name:"Enagement Function", 
  price:"Rs. 5,50,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>,
}, 
{ 
  img:<img src={sangeet} width="320" height="200"  style={{border:'5px outset yellow', borderRadius: '20px', borderWidth:"5px"}}/>, 
  uuid:6, 
  name:"Sangeet Function", 
  price:"Rs. 4,00,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>
},
{ 
  img:<img src={haldi} width="310" height="200"  style={{border:'5px outset yellow', borderRadius: '20px', borderWidth:"5px"}}/>, 
  uuid:2, 
  name:"Haldi Function", 
  price:"Rs. 3,00,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>
},
{ 
  img:<img src={mehendi} width="320" height="300"  style={{border:'5px outset yellow', borderRadius: '20px', borderWidth:"5px"}}/>,  
  uuid:3, 
  name:"Mehendi Function", 
  price:"Rs. 2,50,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>
},
{ 
  img:<img src={reception} width="300" height="200"  style={{border:'5px outset yellow', borderRadius: '20px', borderWidth:"5px"}}/>, 
  uuid:4, 
  name:"Reception Function", 
  price:"Rs. 5,00,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button> 
}, 
{ 
  img:<img src={roka} width="330" height="300"  style={{border:'5px outset yellow', borderRadius: '20px', borderWidth:"5px"}}/>, 
  uuid:5, 
  name:"Roka Function", 
  price:"Rs. 1,50,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>
},

]