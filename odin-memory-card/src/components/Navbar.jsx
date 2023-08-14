/* eslint-disable react/prop-types */
import "../styles/style.css";
import Scoreboard from "./Scoreboard";
import Title from "./Title";

const Navbar = ({ currScore, bestScore }) => {
  return (
    <div className="navbar-container">
      <Title />
      <Scoreboard currScore={currScore} bestScore={bestScore} />
    </div>
  );
};

export default Navbar;
