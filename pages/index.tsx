import Card from '@component/server/card';
import React, { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';
import { allCardStyles } from '../styles/cardStyles';
import {
  getCards,
  getFronts,
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
    id: number;
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
  const back: { id: number; answer: string }[] = getBacks(data);
  const containerStyle = {
    margin: '0 auto',
    width: '40vw',
    borderRadius:"20px"
  };
  return (
    <>
      <div className='titleContainer'>
       
        <h2 className='secondTitle'>PAGED AT 3 AM</h2>
        <h1 className="title">RESPOND OR IGNORE?</h1>
        <h2 className="score">Score: {score}</h2>
      </div>
    

      <ReactCardFlip
        isFlipped={isClicked}
        flipDirection="horizontal"
        containerStyle={containerStyle}
      >
        <div className="front" style={allCardStyles.front}>
          {front[currentCard]}
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
              value="IGNORE"
            >
              IGNORE
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
              value="RESPOND"
            >
              RESPOND
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
              value="IT DEPENDS"
            >
              IT DEPENDS
            </button>
          </div>
        </div>
        <div className="back" style={allCardStyles.back}>
          {back.length === 0 && <div>Loading...</div>}
          {back.length > 0 && <div>{back[currentCard].answer} </div>}
          <div className="buttons" style={allCardStyles.buttonStyle}>
            {currentCard > 0 && (
              <button
                onClick={(event) =>
                  handlePrevious(setIsClicked, setCurrentCard, currentCard)
                }
              >
                Last Card
              </button>
            )}
            {currentCard < back.length - 1 && (
              <button
                onClick={(event) =>
                  handleNext(setIsClicked, setCurrentCard, currentCard)
                }
              >
                Next Card
              </button>
            )}

            <button onClick={(event) => handleBackClick(setIsClicked)}>
              Answer Again
            </button>
          </div>
        </div>
      </ReactCardFlip>
      {isClicked && currentCard === back.length - 1 && (
        <>
          <div className="result">
            Your score is {score}
            <button>X</button>
            <button>play again</button>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
