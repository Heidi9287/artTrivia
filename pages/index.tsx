import Card from '@component/server/card';
import React, { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';
import { allCardStyles } from '../styles/cardStyles';
import Image from 'next/image';
import {
  getCards,
  getFronts,
  getImage,
  getDetailAnswer,
  getBacks,
  checkAnswer,
  handleBackClick,
  handleNext,
  handlePrevious,
} from './helperFunc';
const Home: React.FC = () => {
  type Card = {
    question: string;
    answer: string;
    detailAnswer: string;
    id: number;
    image: string;
  };

  const [isClicked, setIsClicked] = useState(false); // State to keep track of button click
  const [correctIds, setCorrectIds] = useState<number[]>([]);
  const [wrongIds, setWrongIds] = useState<number[]>([]);
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
  const image = getImage(data);
  const detailAnswer = getDetailAnswer(data);
  const back: { id: number; answer: string }[] = getBacks(data);
  return (
    <>
      <div className="titleContainer">
        <h2 className="title">Art Trivia</h2>
        <h2 className="score">Score: {score}</h2>
      </div>
      <div className="triviaContentContainer">
        <ReactCardFlip isFlipped={isClicked} flipDirection="horizontal">
          <div className="front" style={allCardStyles.front}>
            <p className="question"> {front[currentCard]}</p>
            <div className="buttons" style={allCardStyles.buttonStyle}>
              <button
                onClick={(event) =>
                  checkAnswer(
                    event,
                    back,
                    currentCard,
                    correctIds,
                    score,
                    wrongIds,
                    setIsClicked,
                    setScore,
                    setCorrectIds,
                    setWrongIds
                  )
                }
                value="Yes"
                className="buttonStyle"
              >
                YES
              </button>
              <button
                onClick={(event) =>
                  checkAnswer(
                    event,
                    back,
                    currentCard,
                    correctIds,
                    score,
                    wrongIds,
                    setIsClicked,
                    setScore,
                    setCorrectIds,
                    setWrongIds
                  )
                }
                value="No"
                className="buttonStyle"
              >
                NO
              </button>
            </div>
          </div>
          <div className="back" style={allCardStyles.back}>
            {back.length === 0 && <div>Loading...</div>}
            {back.length > 0 && (
              <>
                <p className="answer">{back[currentCard].answer} </p>
                <p className="detailAnswer">{detailAnswer[currentCard]} </p>
              </>
            )}
            <div className="buttons" style={allCardStyles.buttonStyle}>
              {currentCard > 0 && (
                <button
                  onClick={(event) =>
                    handlePrevious(setIsClicked, setCurrentCard, currentCard)
                  }
                  className="buttonStyle"
                >
                  Last Card
                </button>
              )}
              {currentCard < back.length - 1 && (
                <button
                  onClick={(event) =>
                    handleNext(setIsClicked, setCurrentCard, currentCard)
                  }
                  className="buttonStyle"
                >
                  Next Card
                </button>
              )}

              <button
                onClick={(event) => handleBackClick(setIsClicked)}
                className="buttonStyle"
              >
                Answer Again
              </button>
            </div>
          </div>
        </ReactCardFlip>
        <Image
          src={image[currentCard]}
          alt="Mona Lisa"
          width={300}
          height={400}
        />
      </div>
      {isClicked && currentCard === back.length - 1 && (
        <>
          <div className="result">
            Your score is {score}
            <button onClick={()=>{setCurrentCard(0);setIsClicked(false);setScore(0);setCorrectIds([]);setWrongIds([])}} className="buttonStyle">play again</button>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
