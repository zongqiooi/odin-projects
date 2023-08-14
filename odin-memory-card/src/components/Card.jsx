/* eslint-disable react/prop-types */

const Card = ({ dogImage }) => {
  return (
    <div>
      <img
        src={dogImage}
        alt="golden-retriever"
        width={"200px"}
        height={"200px"}
      />
    </div>
  );
};

export default Card;
