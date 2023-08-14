/* eslint-disable react/prop-types */
import Card from "./Card";
import { useEffect, useState } from "react";

const CardContainer = ({ handleScoreCallback }) => {
  const [dogImages, setDogImages] = useState([]);
  const [clickedDogs, setClickedDogs] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breed/retriever/golden/images", { mode: "cors" })
      .then((response) => response.json())
      .then((response) => setDogImages(response.message.slice(-10)))
      .catch((error) => console.error(error));
  }, []);

  const checkClickedDuplicates = (dogImage) => {
    for (let i = 0; i < clickedDogs.length; i++) {
      if (clickedDogs[i] === dogImage) {
        return true;
      }
    }
    return false;
  };

  const handleClickCallback = (dogImage) => {
    let newDogImages = [...dogImages];
    let shuffledDogImages = newDogImages.sort(() => Math.random() - 0.5);
    let duplicatedClick = null;

    duplicatedClick = checkClickedDuplicates(dogImage);
    setClickedDogs(duplicatedClick === true ? [] : [...clickedDogs, dogImage]);
    setDogImages(shuffledDogImages);
    handleScoreCallback(duplicatedClick);
  };

  return (
    <div className="card-container">
      {dogImages.map((dogImage) => (
        <Card
          key={dogImage}
          handleClickCallback={() => handleClickCallback(dogImage)}
          dogImage={dogImage}
        />
      ))}
    </div>
  );
};

export default CardContainer;
