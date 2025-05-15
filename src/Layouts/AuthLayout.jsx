import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

const AuthLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
