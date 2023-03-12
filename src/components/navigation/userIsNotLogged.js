import React from "react";
import { Link } from "react-router-dom";


const UserIsNotLogged = () => {
  return (
    <nav className="flex fixed w-full inset-x-0 top-0 bg-[black] flex-row items-center justify-center p-1" id="">
      <ul className="flex  p-2 [&>*]:font-bold [&>*]:rounded-md [&>*]:p-1 [&>*]:text-gray-200 [&>*]:mx-2 [&>*]:my-3 [&>*:hover]:text-red-500 ">
        <li className="border-x-amber-500  rounded-full">
          <Link to="/">Home</Link>
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
