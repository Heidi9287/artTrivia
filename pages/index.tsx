import Card from "@component/server/card";
import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import { allCardStyles } from "../styles/cardStyles";

const Home: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false); // State to keep track of button click
  type Card = {
    question: string;
    answer: string;
  };
  const [data, setData] = useState<Card[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("./api/card");
      const json = await res.json();
      setData(json.data);
    };
    fetchData();
  }, []);
  const front =data.map((card) => {
   return card.question
  })
  const back = data.map((card) => {
    return card.answer
   })
   console.log(front)
   console.log(back)
  const [currentCard, setCurrentCard] = useState(0);
  const [score, setScore] = useState(0);
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    let answer = (event.target as HTMLButtonElement).value;
    if (back[currentCard] === answer) {
      setScore(score + 1);
    }
    if (back[currentCard] != answer && score > 0) {
      setScore(score - 1);
    }
    setIsClicked(!isClicked); // Update state to indicate button is clicked
  };
  const handleBackClick = () => {
    setIsClicked(false); // Update state to flip the card back
  };
  const handleNext = () => {
    setIsClicked(false);
    setTimeout(() => {
      setCurrentCard(currentCard + 1); //
    }, 100);
  };
  const handlePrevious = () => {
    setIsClicked(false);
    setTimeout(() => {
      setCurrentCard(currentCard - 1);
    }, 100);
  };

  const containerStyle = {
    margin: "5% auto",
    width: "400px",
  };
  return (
    <>
      <div>
        <h1 className="title">IGNORE OR REPONSE?</h1>
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
            <button onClick={handleButtonClick} value="IGNORE">
            IGNORE
            </button>
            <button onClick={handleButtonClick} value="RESPOND">
            RESPOND
            </button>
            <button onClick={handleButtonClick} value="IT DEPENDS">
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
        <div className="result">Your score is {score}</div>
      )}
    </>
  );
};

export default Home;
