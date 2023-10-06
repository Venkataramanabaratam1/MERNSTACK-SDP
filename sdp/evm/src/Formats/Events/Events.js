import React from "react";

const Events = (prop) => {
  const { name, acres, price, seller, location, img } = prop.event;
  return (
    <div className="shadow-2xl rounded-2xl">
      <img className="rounded-t-2xl" src={img} alt="land-img" width="100%" /><br/>
      <div className="p-5">
        <h2 className="text-xl font-semibold mb-2">{name}</h2><br/>
        <h2 className="text-xl">
          <i className="fas fa-rupee-sign text-green-500"></i> {price}
        </h2><br/>
        <h2 className="text-lg">
          <i className="fas fa-home text-blue-500"></i> {acres} places available
        </h2><br/>
        <h2>
          <i className="fas fa-map-marker-alt text-green-500"></i> {location}
        </h2><br/>
        <a className="hover:underline ml-1" href="_seller">
          Visit {seller}
        </a>
        <br />
        <div className="flex items-center justify-between">
          <button 
            onClick={() => prop.handleWishlist(prop)}
            className="bg-red-500 py-1 px-2.5 rounded-lg text-white mt-2"
          >
            <i className="fa fa-heart"></i> Add To Wishlist
          </button>
          <a href="https://wa.me/+916304345373"
            className="bg-green-500 py-1 px-2 rounded-lg text-white mt--1"
          ><i className="fab fa-whatsapp"></i> Contact Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Events;