import React from "react";
import { FaBars, FaHamburger } from "react-icons/fa";
import { useGlobalContext } from "./context";
import Navlinks from "./Navlinks";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <h3 className="logo">Strapi</h3>
        <Navlinks />
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
