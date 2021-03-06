import React from "react";

import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

import "./Card.css";

const CardContainer = () => {
  return (
    <div className="cardContainer">
      <a href="https://www.reactjs.org" target="_blank">
        <CardBanner />
        <CardContent />
      </a>
    </div>
  );
};

export default CardContainer;
