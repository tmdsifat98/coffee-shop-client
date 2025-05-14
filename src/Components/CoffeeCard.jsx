import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, photo, price, supplier, category} = coffee;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            const remainingCoffee = coffees.filter((cof) => cof._id !== _id);
            setCoffees(remainingCoffee);
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your item has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="flex justify-around border border-gray-500 rounded shadow-sm p-3">
      <figure>
        <img className="h-44 w-36" src={photo} alt={name} />
      </figure>
      <div>
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p className="text-xl ">Supplier: {supplier}</p>
        <p className="text-xl text-red-600">Price: {price}tk</p>
        <p className="text-xl ">Category: {category}</p>
      </div>
      <div className="">
        <div className="join join-vertical gap-3">
          <Link to={`/coffees/${_id}`}>
            <button className="btn join-item">View</button>
          </Link>
          <Link to={`/updateCoffe/${_id}`}>
            <button className="btn join-item">Edit</button>
          </Link>

          <button onClick={() => handleDelete(_id)} className="btn join-item">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
