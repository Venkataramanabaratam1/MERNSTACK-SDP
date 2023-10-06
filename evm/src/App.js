import './App.css';
import Two from './components/Two';
import Login from './components/Login'
import Signup from './components/Signup'
import Events from './pages/Events';
import Both from './components/Both';
import MiniApp from './pages/MiniApp';
import {BrowserRouter as BrowserRouter,Route, Routes} from "react-router-dom";
import Birth from './pages/Birth';
import Business from './pages/Business';
import Festivals from './pages/Festivals';
import Flash from './pages/Flash';
import Parties from './pages/Parties';
import Nav from './pages/Nav';
import NavBar from './pages/Navbar';
import Chat from './pages/Chat';
import WishList from './WishList.js';
import Payment from './components/Payment';
import Profile from './components/Profile';
import Comments from './components/Comments';
import ContactUs from './images/ContactUs';
import Services from './images/Services';
import Gallery from './images/Gallery';
import Settings from './images/Settings';
import './components/logsign.css'
import Marriages from './pages/Marriages';
import QR from './containers/QR';
import Userpolicies from './components/Userpolicies';
function App() {
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Both />} />
          <Route path="/MiniApp" element={<MiniApp />} />
          <Route path="/Two" element={<Two />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Both" element={<Both />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Birth" element={<Birth/>}/>
          <Route path="/Events" element={<Events/>}/>
          <Route path="/Business" element={<Business/>}/>
          <Route path="/Festivals" element={<Festivals/>}/>
          <Route path="/Flash" element={<Flash/>}/>
          <Route path="/Parties" element={<Parties/>}/>
          <Route path="/Nav" element={<Nav/>}/>
          <Route path="/NavBar" element={<NavBar/>}/>
          <Route path="/Chat" element={<Chat/>}/>
          <Route path="/Wishlist" element={<WishList/>}/>
          <Route path="/Profile" element={<Profile/>}/>
          <Route path="/Payment" element={<Payment/>}/>
          <Route path="/Comments" element={<Comments/>}/>
          <Route path="/ContactUs" element={<ContactUs/>}/>
          <Route path="/Services" element={<Services/>}/>
          <Route path="/Gallery" element={<Gallery/>}/>
          <Route path="/Settings" element={<Settings/>}/>
          <Route path="/Marriages" element={<Marriages/>}/>
          <Route path="/QR" element={<QR/>}/>
          <Route path="/Userpolicies" element={<Userpolicies/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
