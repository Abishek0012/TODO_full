import React from 'react'
import { useState,useEffect } from 'react';
import Login from './Login';
import { Link } from "react-router-dom";


function Navbar() {


    const navItems = (
      <>
        <li>
          <Link to="/" className='hover:text-indigo-400 text-lg'>Home</Link>
        </li>
        <li>
          <Link to="/todo" className='hover:text-indigo-400 text-lg'>Todo</Link>
        </li>
        <li>
          <Link to="/working" className='hover:text-indigo-400 text-lg'>Working On</Link>
        </li>
        
      </>
    );

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  return (
    <div>
      <div
        className={`fixed top-0 right-0 left-0 z-50 w-full ${
          sticky
            ? "sticky-navbar bg-base-300 shadow-md transition-all duration-100"
            : ""
        }`}
      >
        <div className="navbar bg-base-100 shadow-sm">
          <div className="navbar-start ml-10">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {navItems}
              </ul>
            </div>
            <a className="cursor-pointer text-3xl font-semibold">TODO</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-15">{navItems}</ul>
          </div>
          <div className="navbar-end mr-10">
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar