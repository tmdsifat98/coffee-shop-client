import React from "react";
import { Link } from "react-router";
import AuthContext from "../Provider/AuthContext";

const User = ({ coffeeUser }) => {

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <tbody>
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={coffeeUser.photo}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div className="font-bold">{coffeeUser.name}</div>
          </div>
        </td>
        <td>{coffeeUser.address}</td>
        <td>{coffeeUser.email}</td>
        <th>
          <Link to={`/users/${coffeeUser._id}`}>
            <button className="btn btn-ghost btn-xs">V</button>
          </Link>
          <button className="btn btn-ghost btn-xs">E</button>
          <button
            onClick={() => handleDelete(coffeeUser._id)}
            className="btn btn-ghost btn-xs"
          >
            D
          </button>
        </th>
      </tr>
    </tbody>
  );
};

export default User;
