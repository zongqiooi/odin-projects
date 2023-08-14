import { useState } from "react";
import CardContainer from "./components/CardContainer";
import Navbar from "./components/Navbar";
import "./styles/style.css";

function App() {
  const [currScore, setCurrScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleScoreCallback = (duplicatedClick) => {
    if (duplicatedClick === false) {
      setCurrScore(currScore + 1);
      setBestScore(currScore + 1 > bestScore ? currScore + 1 : bestScore);
    } else if (duplicatedClick === true) {
      setCurrScore(0);
    }
  };

  return (
    <>
      <Navbar currScore={currScore} bestScore={bestScore} />
      <CardContainer handleScoreCallback={handleScoreCallback} />
    </>
  );
}

export default App;
