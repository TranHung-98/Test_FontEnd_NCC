import React from "react";
import { NavLink } from "react-router-dom";


class Navbar extends React.Component {

  render() {
    return (
      <div className="navbar">
        <NavLink className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        } to="/"> Home</NavLink>
        <NavLink className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        } to="/service">Services</NavLink>
        <NavLink className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        } to="/new">New</NavLink>
        <NavLink className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        } to="/blog">Blog</NavLink>
        <NavLink className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        } to="/contact">Contact </NavLink>
      </div>
    )
  }
}


export default Navbar;
