import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/coffees")
      .then((res) => res.json())
      .then((data) => setCoffees(data));
  }, []);
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const coffeeData = Object.fromEntries(formData);
    console.log(coffeeData);
    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          coffeeData._id = data.insertedId;
          setCoffees([...coffees, coffeeData]);
          form.reset();
          Swal.fire({
            position: "top-center",
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
      <h1 className="text-5xl font-bold text-center my-6">Add New Coffee</h1>
      <p className="text-center mb-3 w-2/3 mx-auto">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <form onSubmit={handleAddCoffee} className="px-16">
        <fieldset className="fieldset w-full grid grid-cols-2 gap-x-36 px-16 bg-base-200 border-base-300 rounded-box border p-4">
          <legend className="fieldset-legend">Add Coffee Form</legend>

          <div>
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="My awesome page"
            />
          </div>
          <div>
            <label className="label">Chef</label>
            <input
              type="text"
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
              className="input w-full"
              placeholder="My awesome page"
            />
          </div>
          <div>
            <label className="label">Price</label>
            <input
              type="text"
              name="price"
              className="input w-full"
              placeholder="My awesome page"
            />
          </div>
          <div>
            <label className="label">Category</label>
            <input
              type="text"
              name="category"
              className="input w-full"
              placeholder="My awesome page"
            />
          </div>
          <div>
            <label className="label">Details</label>
            <input
              type="text"
              name="details"
              className="input w-full"
              placeholder="My awesome page"
            />
          </div>
          <div className="col-span-2">
            <label className="label">Photo</label>
            <input
              type="text"
              name="photo"
              className="input w-full"
              placeholder="My awesome page"
            />
          </div>
          <button className="btn btn-secondary col-span-2">Add coffee</button>
        </fieldset>
      </form>

      <div>{coffees.length}</div>
    </div>
  );
};

export default AddCoffee;
