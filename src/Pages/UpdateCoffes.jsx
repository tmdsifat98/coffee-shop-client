import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffes = () => {
  const { _id, name, photo, price, chef, supplier, details, category } =
    useLoaderData();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const coffeeData = Object.fromEntries(formData);
    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Item has been updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-5xl font-bold text-center my-6">Update Coffee</h1>
      <form onSubmit={handleUpdateCoffee} className="px-16">
        <fieldset className="fieldset w-full grid grid-cols-2 gap-x-36 gap-y-3 px-16 bg-base-200 border-base-300 rounded-box border p-4">
          <legend className="fieldset-legend">Add Coffee Form</legend>

          <div>
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              className="input w-full"
              placeholder="My awesome page"
            />
          </div>
          <div>
            <label className="label">Chef</label>
            <input
              type="text"
              defaultValue={chef}
              name="chef"
              className="input w-full"
              placeholder="My awesome page"
            />
          </div>
          <div>
            <label className="label">Supplier</label>
            <input
              type="text"
              name="supplier"
              defaultValue={supplier}
              className="input w-full"
              placeholder="My awesome page"
            />
          </div>
          <div>
            <label className="label">Price</label>
            <input
              type="text"
              name="price"
              defaultValue={price}
              className="input w-full"
              placeholder="My awesome page"
            />
          </div>
          <div>
            <label className="label">Category</label>
            <input
              type="text"
              name="category"
              defaultValue={category}
              className="input w-full"
              placeholder="My awesome page"
            />
          </div>
          <div>
            <label className="label">Details</label>
            <input
              type="text"
              name="details"
              defaultValue={details}
              className="input w-full"
              placeholder="My awesome page"
            />
          </div>
          <div className="col-span-2">
            <label className="label">Photo</label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              className="input w-full"
              placeholder="My awesome page"
            />
          </div>
          <button className="btn btn-secondary col-span-2">Add coffee</button>
        </fieldset>
      </form>
    </div>
  );
};

export default UpdateCoffes;
