import React from "react";
import Title from "./Title";
import Scoreboard from "./Scoreboard";
import "../styles/style.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Title />
      <Scoreboard />
    </div>
  );
};

export default Navbar;
