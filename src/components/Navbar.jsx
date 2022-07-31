import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h3>
        <Link to="/">Chat</Link>
      </h3>
      <h3>
        <Link to="/register">Register</Link>
      </h3>
    </nav>
  );
};

export default Navbar;
