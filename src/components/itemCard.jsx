import React from "react";
import alt from "../images/alt.jpeg";

const ItemCard = ({ id, retailPrice, media, brand, title }) => {
  return (
    <div key={id} className="">
      <div className="bg-white grid place-items-center">
        <img
          className="w-5/6"
          src={media.imageUrl ? media.imageUrl : alt}
          alt="shoe"
        />
      </div>
      <div className="mt-5">
        <p className="text-xs text-left text-gray-500 mb-2">{brand}</p>
        <p className="font-semibold text-left text-sm text-gray-600">{title}</p>
        <p className="text-xs text-left text-gray-500 mt-2">₦ {retailPrice}</p>
      </div>
    </div>
  );
};

export default ItemCard;
