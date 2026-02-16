import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [mobileView, setMobileView] = useState(false);

  const handleButtonToggle = () => {
    return setMobileView(!mobileView);
  };

  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="logo">
            <NavLink to="/">
              <h1 className="text-5xl">WorldAtlas</h1>
            </NavLink>
          </div>

          <nav className={mobileView ? "menu-mobile" : "menu-web"}>
            <ul className="flex text-white">
              <li className="text-white text-2xl">
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/country">Country</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>

          <div className="ham-menu">
            <button onClick={handleButtonToggle}>
              <RxHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
