import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink
        to="/login"
        className={(isActive) => (isActive ? "activeNavbar" : "navbar")}
      >
        Login
      </NavLink>
      <br /> <br />
      <NavLink
        to="/cart"
        className={(isActive) => (isActive ? "activeNavbar" : "navbar")}
      >
        Cart
      </NavLink>
      <br /> <br />
      <NavLink
        to="/shop"
        className={(isActive) => (isActive ? "activeNavbar" : "navbar")}
      >
        Productos
      </NavLink>

      {/* <Outlet /> */}


    </div>
  );
};

export default Navbar;
