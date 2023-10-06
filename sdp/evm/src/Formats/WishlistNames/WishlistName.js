import React from "react";

const WishlistName = (prop) => {
  const { eventDetails } = prop;
  return (
    <div className="shadow-xl rounded-xl flex items-center gap-4 mt-4">
      <img
        className="w-20 rounded-l-xl"
        src={eventDetails.event.img}
        alt="event-img"
      />
      <p>{eventDetails.event.name}</p>
    </div>
  );
};

export default WishlistName;