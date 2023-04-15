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
  const [currentCard, setCurrentCard] = useState(0);
  const handleButtonClick = () => {
    setIsClicked(!isClicked); // Update state to indicate button is clicked
  };
  const handleBackClick = () => {
    setIsClicked(false); // Update state to flip the card back
  };
  const handleNext = () => {
    setIsClicked(false);
    setTimeout(() => {
      setCurrentCard((prevCard) => (prevCard + 1) % front.length); // 
    }, 100);
  };

  const handlePrevious = () => {
    setIsClicked(false);
    setTimeout(() => { setCurrentCard(currentCard - 1);},100)
  };

  const containerStyle = {
    margin: "5% auto",
    width: "400px",
  };

  return (
    <>
      <ReactCardFlip
        isFlipped={isClicked}
        flipDirection="horizontal"
        containerStyle={containerStyle}
      >
        <div className="front" style={allCardStyles.front}>
          {front[currentCard]}
          <div className="buttons" style={allCardStyles.buttonStyle}>
            <button onClick={handleButtonClick}>Ignore</button>
            <button onClick={handleButtonClick}>Response</button>
          </div>
        </div>
        <div
          className="back"
          style={allCardStyles.back}
        >
          {back[currentCard]}
          <div className="buttons" style={allCardStyles.buttonStyle}>
    <button onClick={handleNext}>Next Card</button>
     {    currentCard>0 && <button onClick={handlePrevious}>Last Card</button>}
      <button   onClick={handleBackClick}>See the question again</button>
      </div>
        </div>
      </ReactCardFlip>

    </>
  );
};

export default Home;
