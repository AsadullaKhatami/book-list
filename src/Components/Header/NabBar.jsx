import React from 'react';
import { NavLink } from 'react-router';
import './NabBar.css'

const NabBar = () => {
    return (
      <div className="navbar work-sans container">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="listedBooks">Listed Books</NavLink>
              </li>
              <li>
                <NavLink to="pagesToRead">Pages to Read</NavLink>
              </li>
            </ul>
          </div>
          <h1 className="text-3xl font-bold">Book List</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="custom-menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="listedBooks">Listed Books</NavLink>
            </li>
            <li>
              <NavLink to="pagesToRead">Pages to Read</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="mr-3 btn bg-[#23BE0A] text-white">Sign In</a>
          <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
        </div>
      </div>
    );
};

export default NabBar;