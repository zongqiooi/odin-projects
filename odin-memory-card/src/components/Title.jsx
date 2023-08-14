import React from "react";
import "../styles/style.css";

const Title = () => {
  return (
    <div className="title-container">
      <h2 className="text-title">Tech CEO Memory Game</h2>
      <div className="text-instruction">
        Get points by clicking on an image but don't click on any more than
        once!
      </div>
    </div>
  );
};

export default Title;
