import Button from '@mui/material/Button';
import engagement from './images/babyshower.jpg'
import haldi from './images/candle.jpg'
import mehendi from './images/Academic.jpg'
import reception from './images/promotions.jpg'
import roka from './images/flash_mobs.jpg'
import sangeet from './images/House_warming.jpg'
export const Honour=[
  { 
    img:<img src={reception} width="310" height="200" style={{border:'5px outset deepPink', borderRadius: '20px', borderWidth:"5px"}}/>, 
    uuid:4, 
    name:"Movie Promotions", 
    price:"Rs. 5,00,000/-", 
    available:true,
    button: <Button variant="contained">More info</Button> 
  }, 
  
{ 
  img:<img src={haldi} width="290" height="200" style={{border:'5px outset deepPink', borderRadius: '20px', borderWidth:"5px"}}/>, 
  uuid:2, 
  name:"Candle Light Dinner", 
  price:"Rs. 1,75,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>
},
{ 
  img:<img src={mehendi} width="310" height="200" style={{border:'5px outset deepPink', borderRadius: '20px', borderWidth:"5px"}}/>,  
  uuid:3, 
  name:"Academic Events", 
  price:"Rs. 4,00,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>
},
{ 
  img:<img src={roka} width="300" height="200" style={{border:'5px outset deepPink', borderRadius: '20px', borderWidth:"5px"}}/>, 
  uuid:5, 
  name:"Flash Mobs", 
  price:"Rs. 55,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>
},
{ 
  img:<img src={engagement} width="294" height="200" style={{border:'5px outset deepPink', borderRadius: '20px', borderWidth:"5px"}}/>, 
  uuid:1, 
  name:"Baby Shower", 
  price:"Rs. 2,00,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button> 
}, 
{ 
  img:<img src={sangeet} width="300" height="200" style={{border:'5px outset deepPink', borderRadius: '20px', borderWidth:"5px"}}/>,
  uuid:6, 
  name:"House Warming", 
  price:"Rs. 2,00,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>
}
]