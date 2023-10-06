import React from "react";
import Shop from "./Formats/Shop/Shop";
import NavBar from './pages/Navbar';
import Footer from './images/Footer';
function WishList() {
  return (
    <div >
      <NavBar/>
      <Shop></Shop>
      <Footer/>
    </div>
  );
}

export default WishList;