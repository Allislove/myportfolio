import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const user = localStorage.getItem("token");
  console.log(user);

  return (
    <nav className="navbar">
      <ul className="">
        <li className="">
          <Link to="/">Home</Link>
        </li>
        <li className="">
          <Link to="/blog">
            Blog
          </Link>
        </li>
        <li className="">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="">
          <Link to="/aboutme">Aboutme</Link>
        </li>
        <li className="">
          <Link to="/newpost">Add</Link>
        </li>
        <li className="">
          <Link to="/logout" onClick={logout}>
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
