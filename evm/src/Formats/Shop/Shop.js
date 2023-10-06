import React, { useEffect, useState } from "react";
import Events from "../Events/Events";
import Wishlist from "../Wishlist/Wishlist";

const Shop = () => {
  //Set Land
  const [events, setEvents] = useState([]);
  //Get Data From JSON
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
  //Set Wishlist
  const [wishlist, setWishlist] = useState([]);
  //Wishlist Handler Function
  const handleWishlist = (land) => {
    const eventWishlist = [...wishlist, land];
    setWishlist(eventWishlist);
  };
  return (
    <div className=" grid grid-cols-4 gap-12 my-10">
      <div className="col-span-3 grid grid-cols-3 gap-5">
        {events.map((event) => (
          <Events
            event={event}
            key={event.id}
            handleWishlist={handleWishlist}
          ></Events>
        ))}
      </div>
      <div className="col-span-1 text-center">
        <Wishlist wishlist={wishlist}></Wishlist>
      </div>
    </div>
  );
};

export default Shop;