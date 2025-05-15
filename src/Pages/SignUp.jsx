import React, { useContext } from "react";
import { Link } from "react-router";
import AuthContext from "../Provider/AuthContext";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const user = Object.fromEntries(formData.entries());
    const { email, password, ...rest } = user;
    const newUser = { email, ...rest };

    createUser(email, password)
      .then((res) => {
        console.log(res);
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })  
          .then((res) => res.json())
          .then((data) => console.log(data));
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSignUp} className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
            />
            <label className="label">Address</label>
            <input
              type="text"
              name="address"
              className="input"
              placeholder="Address"
            />
            <label className="label">Contact</label>
            <input
              type="text"
              name="contact"
              className="input"
              placeholder="Contact"
            />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <label className="label">Photo Url</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Photo Url"
            />

            <button className="btn btn-neutral mt-4">Sign Up</button>
          </form>
          <div>
            Already have an account? Please{" "}
            <Link className="text-blue-700 hover:underline" to="/auth/signin">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
