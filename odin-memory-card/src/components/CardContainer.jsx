import Card from "./Card";
import { useEffect, useState } from "react";

const CardContainer = () => {
  const [dogImages, setDogImages] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breed/retriever/golden/images", { mode: "cors" })
      .then((response) => response.json())
      .then((response) => setDogImages(response.message.slice(-10)))
      .catch((error) => console.error(error));
  }, []);

  const handleClick = () => {
    let newDogImages = [...dogImages];
    let shuffledDogImages = newDogImages.sort(() => Math.random() - 0.5);
    setDogImages(shuffledDogImages);
  };

  return (
    <div className="card-container">
      {dogImages.map((dogImage) => (
        <Card
          key={dogImage}
          handleClickCallback={handleClick}
          dogImage={dogImage}
        />
      ))}
    </div>
  );
};

export default CardContainer;
