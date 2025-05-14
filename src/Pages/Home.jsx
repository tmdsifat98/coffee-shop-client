import React, { useState } from "react";
import CoffeeCard from "../Components/CoffeeCard";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  const [coffees, setCoffees] = useState(data);
  return (
    <div className="w-11/12 mx-auto">
      Bannerr
      <div className="grid grid-cols-2 gap-6">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffees={coffees}
            setCoffees={setCoffees}
            coffee={coffee}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
