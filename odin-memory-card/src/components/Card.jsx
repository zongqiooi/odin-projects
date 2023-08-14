/* eslint-disable react/prop-types */
import "../styles/style.css";

const Card = ({ dogImage, handleClickCallback }) => {
  return (
    <div className="card">
      <img
        onClick={() => handleClickCallback(dogImage)}
        src={dogImage}
        alt="golden-retriever"
        width={"200px"}
        height={"200px"}
      />
    </div>
  );
};

export default Card;
