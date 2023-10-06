import Button from '@mui/material/Button';
import engagement from './images/superheros.jpg'
import haldi from './images/circus.jpg'
import mehendi from './images/princes.jpg'
import reception from './images/games.jpg'
import roka from './images/grand.jpg'
import sangeet from './images/hall.jpg'
export const Birthday=[
  { 
    img:<img src={haldi} width="310" height="200" style={{border:'5px outset red', borderRadius: '20px', borderWidth:"5px"}}/>, 
    uuid:2, 
    name:"Circus Birthdays", 
    price:"Rs. 60,000/-", 
    available:true,
    button: <Button variant="contained">More info</Button>
  },
  { 
    img:<img src={mehendi} width="290" height="200" style={{border:'5px outset red', borderRadius: '20px', borderWidth:"5px"}}/>,  
    uuid:3, 
    name:"Princes Birthdays", 
    price:"Rs. 70,000/-", 
    available:true,
    button: <Button variant="contained">More info</Button>
  },
  { 
    img:<img src={reception} width="290" height="200" style={{border:'5px outset red', borderRadius: '20px', borderWidth:"5px"}}/>, 
    uuid:4, 
    name:"Games Birthdays", 
    price:"Rs. 30,000/-", 
    available:true,
    button: <Button variant="contained">More info</Button> 
  }, 
  { 
    img:<img src={engagement} width="270" height="200" style={{border:'5px outset red', borderRadius: '20px', borderWidth:"5px"}}/>, 
    uuid:1, 
    name:"Super Heroes Birthdays", 
    price:"Rs. 50,000/-", 
    available:true,
    button: <Button variant="contained">More info</Button> 
  }, 
  { 
    img:<img src={roka} width="310" height="200" style={{border:'5px outset red', borderRadius: '20px', borderWidth:"5px"}}/>, 
    uuid:5, 
    name:"Grand Birthday Celebrations", 
    price:"Rs. 1,00,000/-", 
    available:true,
    button: <Button variant="contained">More info</Button>
  },
  { 
    img:<img src={sangeet} width="310" height="200" style={{border:'5px outset red', borderRadius: '20px', borderWidth:"5px"}}/>, 
    uuid:6, 
    name:"Banquent Hall Birthdays", 
    price:"Rs. 1,20,000/-", 
    available:true,
    button: <Button variant="contained">More info</Button>
  }
  ]