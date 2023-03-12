import React from "react";
import { Link } from "react-router-dom";


const UserIsNotLogged = () => {
  return (
    <nav className="flex " id="">
      <ul className="">
        <li className="">
          <Link to="/">Homex</Link>
        </li>
        <li className="">
          <Link className="a" to="/blog">
            Blog
          </Link>
        </li>
{/*         <li className="" style={{visibility: "hidden"}}>
          <Link to="/portfolio">Portfolio</Link>
        </li> */}
        <li className="">
          <Link to="/aboutme">Aboutme</Link>
        </li>
        <li className="">
          <Link to="/signin">Signin</Link>
        </li>
      </ul>
    </nav>
  );
};

export default UserIsNotLogged;
