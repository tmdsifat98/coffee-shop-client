import React from "react";
import { useLoaderData } from "react-router";

const CoffeeView = () => {
  const { name, photo, price, supplier, category } = useLoaderData();
  return (
    <div className="flex items-center justify-center flex-col mt-12">
      <h2 className="text-2xl font-semibold">{name}</h2>
      <img className="w-96" src={photo} alt="" />
      <p className="text-xl ">Supplier: {supplier}</p>
      <p className="text-xl text-red-600">Price: {price}tk</p>
      <p className="text-xl ">Category: {category}</p>
    </div>
  );
};

export default CoffeeView;
