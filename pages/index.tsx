import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import allCardStyles from "./cardStyles";
const front: string[] = ["🤖", "👽", "👻", "🤡", "🐧", "🦚", "😄", "🚀"];
const back: string[] = [
  "robot",
  "alien",
  "ghost",
  "clown",
  "bird",
  "peacoak",
  "happyFace",
  "rocket",
];
const Home: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false); // State to keep track of button click

  const handleButtonClick = () => {
    setIsClicked(true); // Update state to indicate button is clicked
  };
  const [currentCard, setCurrentCard] = useState(0);
  const handleNext = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % front.length); // Increment current card index
  };
  const handlePrevious = () => {
    setCurrentCard(currentCard - 1);
  };

  return (
      <ReactCardFlip
        isFlipped={isClicked}
        flipDirection="horizontal"
        cardStyles={allCardStyles}
        containerStyle={{margin:'auto'}}
      >
        <div
          className="front"
        
        >
          {front[currentCard]}
          <div
            className="buttons"
            style={{
              flexBasis: "100%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <button onClick={handleButtonClick}>Ignore</button>
            <button onClick={handleButtonClick}>Response</button>
          </div>
        </div>
        <div
          className="back"
          onClick={handleButtonClick}
          
        ></div>
      </ReactCardFlip>
 
  );
};

export default Home;
