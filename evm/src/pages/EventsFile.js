import Button from '@mui/material/Button';
import engagement from './images/Marriage.png'
import haldi from './images/Birthday.png'
import mehendi from './images/Business.png'
import reception from './images/Holi.png'
import roka from './images/general.png'
import sangeet from './images/Party.png'
export const EventsFile=[{ 
  img:<img src={engagement} width="300" height="200" style={{border:'5px outset Lime', borderRadius: '20px', borderWidth:"5px"}}/>, 
  uuid:1, 
  name:"Marriage Functions", 
  button: <Button variant="contained" href="/Marriages">More Details</Button> 
}, 
{ 
  img:<img src={haldi} width="300" height="200" style={{border:'5px outset Lime', borderRadius: '20px', borderWidth:"5px"}}/>, 
  uuid:2, 
  name:"Birthday Events", 
  button: <Button variant="contained" href="/Birth">More Details</Button>
},
{ 
  img:<img src={mehendi} width="300" height="200" style={{border:'5px outset Lime', borderRadius: '20px', borderWidth:"5px"}}/>,  
  uuid:3, 
  name:"Business Events", 
  button: <Button variant="contained"  href="/Business">More Details</Button>
},
{ 
  img:<img src={reception} width="300" height="200" style={{border:'5px outset Lime', borderRadius: '20px', borderWidth:"5px"}}/>, 
  uuid:4, 
  name:"Festival Celebrations", 
  button: <Button variant="contained"  href="/Festivals">More Details</Button> 
}, 
{ 
  img:<img src={roka} width="320" height="200" style={{border:'5px outset Lime', borderRadius: '20px', borderWidth:"5px"}}/>, 
  uuid:5, 
  name:"General Events", 
  button: <Button variant="contained"  href="/Flash">More Details</Button>
},
{ 
  img:<img src={sangeet} width="300" height="200" style={{border:'5px outset Lime', borderRadius: '20px', borderWidth:"5px"}}/>, 
  uuid:6, 
  name:"Parties", 
  button: <Button variant="contained"  href="/Parties">More Details</Button>
}
]