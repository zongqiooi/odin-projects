import React from "react";
import Card from "./Card";
import { useEffect, useState } from "react";

const CardContainer = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("");
  }, []);

  return (
    <div>
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardContainer;
