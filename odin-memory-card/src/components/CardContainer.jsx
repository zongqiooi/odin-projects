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

  return (
    <div className="card-container">
      {dogImages.map((dogImage) => (
        <Card key={dogImage} dogImage={dogImage} />
      ))}
    </div>
  );
};

export default CardContainer;
