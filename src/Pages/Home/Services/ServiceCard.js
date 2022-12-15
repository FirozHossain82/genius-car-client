import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { img, price, title } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mb-6">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-2xl text-orange-600 font-semibold">
          Price: ${price}
        </p>
        <div className="card-actions justify-end">
          <button className="btn  btn-outline btn-success">Buy Now <FaArrowRight className="text-orange-500"/></button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
