import React, { useState, useEffect } from "react";
import ReactCardFlip from 'react-card-flip';
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
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const handleCardClick = (index: number) => {
    if (!flippedCards.includes(index)) {
      setFlippedCards([...flippedCards, index]);
    } else {
      setFlippedCards(flippedCards.filter((cardIndex) => cardIndex !== index));
    }
  };
  return (
    <div>
    <div className="gameBoard">
      {front.map((item: string, index: number) => (
        <div   className="card"   key={index}>
        <ReactCardFlip
          isFlipped={flippedCards.includes(index)}
          flipDirection="horizontal"
        >
          <div
            className="front"
          >
            {item}
            <div className="buttons">
          <button      onClick={() => handleCardClick(index)}>Ignore</button>
          <button      onClick={() => handleCardClick(index)}>Response</button>
          </div>
          </div>
          <div className="back" onClick={() => handleCardClick(index)}></div>
        </ReactCardFlip>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Home;
