/* eslint-disable react/prop-types */
const Scoreboard = ({ currScore, bestScore }) => {
  return (
    <div>
      <h2 className="text-scoreboard">Scoreboard</h2>
      <div className="text-score">Current Score: {currScore}</div>
      <div className="text-score">Best Score: {bestScore}</div>
    </div>
  );
};

export default Scoreboard;
