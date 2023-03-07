import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { Logo } from "../assets";
import { NavLink } from "react-router-dom";




const NavBarLinksList = () => (
  
  <>
   <div className="sections">
            <NavLink to="/classes">
              <p className="navbar-link">Classes</p>
            </NavLink>

            <NavLink to="/bmi-calculator">
              <p className="navbar-link">BMI calculator</p>
            </NavLink>

            <NavLink to="/trainers">
              <p className="navbar-link">Trainers</p>
            </NavLink>

            <NavLink to="/blogs">
              <p className="navbar-link">Blogs</p>
            </NavLink>
          </div>

          <div>
            <button className="signing-link">
              <NavLink to="/register">
                <p className="navbar-link">Sign In/Up</p>
              </NavLink>
            </button>
          </div>
  </>
);

const NavBar = () => {

  const [toggleMenu, setToggleMenu]= useState(false);
  return (
    <>
      <div className="navbar-container" id="navbar">
        <div className="navbar-logo">
          <NavLink to="/">
            <img src={Logo} alt="logo" />
          </NavLink>
        </div>

        <div className="navbar-links">
          <NavBarLinksList/>
        </div>

        <div className="toggle-menu">
        {toggleMenu ? (
          <IoMdClose
            color="#FAF8FF"
            size={32}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Fill
            color="#FAF8FF"
            size={32}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <NavBarLinksList/>
         )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
