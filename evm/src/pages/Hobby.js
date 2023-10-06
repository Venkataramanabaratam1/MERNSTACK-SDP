import Button from '@mui/material/Button';
import engagement from './images/cocktail-photo.jpg'
import haldi from './images/kitty.jpg'
import mehendi from './images/bachloer.jpg'
import reception from './images/newyear.jpg'
import roka from './images/anniversary.jpg'
import sangeet from './images/independence.jpg'
export const Hobby=[{ 
  img:<img src={engagement} width="306" height="200" style={{border:'5px outset orange', borderRadius: '20px', borderWidth:"5px"}}/>, 
  uuid:1, 
  name:"Cocktail-Party", 
  price:"Rs. 90,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button> 
}, 
{ 
  img:<img src={mehendi} width="295" height="200" style={{border:'5px outset orange', borderRadius: '20px', borderWidth:"5px"}}/>,  
  uuid:3, 
  name:"Bachelor Party", 
  price:"Rs. 2,00,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>
},
{ 
  img:<img src={reception} width="305" height="200" style={{border:'5px outset orange', borderRadius: '20px', borderWidth:"5px"}}/>, 
  uuid:4, 
  name:"New Year Party", 
  price:"Rs. 2,00,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button> 
}, 
{ 
  img:<img src={roka} width="300" height="200" style={{border:'5px outset orange', borderRadius: '20px', borderWidth:"5px"}}/>, 
  uuid:5, 
  name:"Anniversary Celebrations", 
  price:"Rs. 1,50,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>
},
{ 
  img:<img src={haldi} width="300" height="200" style={{border:'5px outset orange', borderRadius: '20px', borderWidth:"5px"}}/>, 
  uuid:2, 
  name:"Kitty Party", 
  price:"Rs. 70,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>
},
{ 
  img:<img src={sangeet} width="305" height="200" style={{border:'5px outset orange', borderRadius: '20px', borderWidth:"5px"}}/>, 
  uuid:6, 
  name:"Independence Day Celebrations", 
  price:"Rs. 1,00,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>
}
]