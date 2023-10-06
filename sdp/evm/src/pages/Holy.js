import Button from '@mui/material/Button';
import engagement from './images/sankranthi.png'
import haldi from './images/diwali.jpg'
import mehendi from './images/navratri.jpg'
import reception from './images/holi.jpg'
import roka from './images/Krishnashtami.jpg'
import sangeet from './images/ganesh.jpg'
export const Holy=[
  { 
    img:<img src={reception} width="300" height="200" style={{border:'5px outset cyan', borderRadius: '20px', borderWidth:"5px"}}/>, 
    uuid:4, 
    name:"Holi", 
    price:"Rs. 60,000/-", 
    available:true,
    button: <Button variant="contained">More info</Button> 
  }, 
  { 
    img:<img src={roka} width="300" height="200" style={{border:'5px outset cyan', borderRadius: '20px', borderWidth:"5px"}}/>, 
    uuid:5, 
    name:"Krishnashtami", 
    price:"Rs. 85,000/-", 
    available:true,
    button: <Button variant="contained">More info</Button>
  },
  { 
    img:<img src={sangeet} width="300" height="200" style={{border:'5px outset cyan', borderRadius: '20px', borderWidth:"5px"}}/>, 
    uuid:6, 
    name:"Ganesh Chathurthi", 
    price:"Rs. 5,00,000/-", 
    available:true,
    button: <Button variant="contained">More info</Button>
  },
  { 
  img:<img src={engagement} width="280" height="200" style={{border:'5px outset cyan', borderRadius: '20px', borderWidth:"5px"}}/>, 
  uuid:1, 
  name:"Sankranthi", 
  price:"Rs. 1,00,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button> 
}, 
{ 
  img:<img src={haldi} width="300" height="200" style={{border:'5px outset cyan', borderRadius: '20px', borderWidth:"5px"}}/>, 
  uuid:2, 
  name:"Diwali", 
  price:"Rs. 50,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>
},
{ 
  img:<img src={mehendi} width="315" height="200" style={{border:'5px outset cyan', borderRadius: '20px', borderWidth:"5px"}}/>,  
  uuid:3, 
  name:"Dusshera", 
  price:"Rs. 2,00,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>
},
]