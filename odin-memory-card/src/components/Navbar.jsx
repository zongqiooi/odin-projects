import "../styles/style.css";
import Scoreboard from "./Scoreboard";
import Title from "./Title";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Title />
      <Scoreboard />
    </div>
  );
};

export default Navbar;
