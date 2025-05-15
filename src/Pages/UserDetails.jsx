import React from "react";
import { useLoaderData } from "react-router";

const UserDetails = () => {
  const { name, address, email, photo, _id } = useLoaderData();
  return (
    <div className="overflow-x-auto w-7/12 mx-auto">
      <table className="table text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img src={photo} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div className="font-bold">{name}</div>
              </div>
            </td>
            <td>{address}</td>
            <td>{email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserDetails;
