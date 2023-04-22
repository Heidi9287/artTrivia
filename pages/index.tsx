import Card from "@component/server/card";
import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import { allCardStyles } from "../styles/cardStyles";
import {
  getCards,
  getFronts,
  getBacks,
  checkAnswer,
  handleBackClick,
  handleNext,
  handlePrevious,
} from "./helperFunc";
const Home: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false); // State to keep track of button click
  const [data, setData] = useState<Card[]>([]);
  const [currentCard, setCurrentCard] = useState(0);
  const [score, setScore] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const cards = await getCards();
      setData(cards);
    };
    fetchData();
  }, []);
  const front = getFronts(data);
  const back=getBacks(data)
  const containerStyle = {
    margin: "5% auto",
    width: "400px",
  };
  return (
    <>
      <div>
        <h1 className="title">IGNORE OR REPOND?</h1>
      </div>
      <div className="score">Score: {score}</div>
      <ReactCardFlip
        isFlipped={isClicked}
        flipDirection="horizontal"
        containerStyle={containerStyle}
      >
        <div className="front" style={allCardStyles.front}>
          {front[currentCard]}
          <div className="buttons" style={allCardStyles.buttonStyle}>
            <button onClick={checkAnswer} value="IGNORE">
              IGNORE
            </button>
            <button onClick={checkAnswer} value="RESPOND">
              RESPOND
            </button>
            <button onClick={checkAnswer} value="IT DEPENDS">
              IT DEPENDS
            </button>
          </div>
        </div>
        <div className="back" style={allCardStyles.back}>
          {back[currentCard]}
          <div className="buttons" style={allCardStyles.buttonStyle}>
            {currentCard > 0 && (
              <button onClick={handlePrevious}>Last Card</button>
            )}
            {currentCard < back.length - 1 && (
              <button onClick={handleNext}>Next Card</button>
            )}

            <button onClick={handleBackClick}>Answer Again</button>
          </div>
        </div>
      </ReactCardFlip>
      {isClicked && currentCard === back.length - 1 && (
        <>
          <div className="result">Your score is {score}
          <button>X</button>
          <button>play again</button>
          </div>
         
        </>
      )}
    </>
  );
};

export default Home;
