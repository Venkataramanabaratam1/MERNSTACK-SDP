import { Button } from "@mui/material";
import React from "react";
import WishlistName from "../WishlistNames/WishlistName";

const Wishlist = (prop) => {
  const { wishlist } = prop;
  let total = 0;
  for (const item of wishlist) {
    const eventPrice = item.event.price;
    total += eventPrice;
  }
  return (
    <div>
    <div className="shadow-2xl h-1/5 top-0 sticky mt-2 rounded-2xl p-5 overflow-y-auto">
      <h2 className="text-2xl my-5 font-semibold">Your Wishlist</h2>
      <hr />
      <div className="text-left ml-3 mt-3">
        <h2 className="text-xl my-2">Events Added: {wishlist.length}</h2><br/>
        <h2 className="text-xl">Total Event valuation:  {total}</h2>
        {wishlist.map((land) => (
          <WishlistName eventDetails={land} key={Math.random()}></WishlistName>
        ))}
      </div>
    </div><br/><br/>
    <Button variant="contained" href="/Payment">Go to Payment Interface</Button>
    </div>
  );
};

export default Wishlist;