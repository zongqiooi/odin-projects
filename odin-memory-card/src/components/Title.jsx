import "../styles/style.css";

const Title = () => {
  return (
    <div className="title-container">
      <h2 className="text-title">Dog Memory Game</h2>
      <div className="text-instruction">
        Get points by clicking on a dog image but do not click on any more than
        once!
      </div>
    </div>
  );
};

export default Title;
