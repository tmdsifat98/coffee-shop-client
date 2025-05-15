import React from "react";
import { useLoaderData } from "react-router";
import User from "./User";

const Users = () => {
  const users = useLoaderData();
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          {users.map((coffeeUser) => (
            <User key={coffeeUser._id} coffeeUser={coffeeUser} />
          ))}
        </table>
      </div>
    </div>
  );
};

export default Users;
