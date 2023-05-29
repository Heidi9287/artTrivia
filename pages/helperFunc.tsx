import React from 'react';

type Card = {
  question: string;
  answer: string;
  image:string;
  id: number;
};

type back = { id: number; answer: string };

export const getCards = async (): Promise<Card[]> => {
  const res = await fetch('./api/card');
  const json = await res.json();
  return json.data;
};

export const getFronts = (cards: Card[]): string[] => {
  return cards.map((card) => card.question);
};
export const getImage = (cards: Card[]): string[] => {
  return cards.map((card) => 
  card.image
  );
};

export const getBacks = (cards: Card[]) => {
  const backData = cards.map((card) => ({
    id: card.id,
    answer: card.answer,
  }));
  return backData;
};

export const checkAnswer = (
  event: React.MouseEvent<HTMLButtonElement>,
  back: back[],
  currentCard: number,
  correctIds: number[],
  score: number,
  wrongIds: number[],
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>,
  setScore: React.Dispatch<React.SetStateAction<number>>,
  setCorrectIds: React.Dispatch<React.SetStateAction<number[]>>,
  setWrongIds: React.Dispatch<React.SetStateAction<number[]>>
) => {
  let answer = (event.target as HTMLButtonElement).value;
  if (
    back[currentCard].answer === answer &&
    !correctIds.includes(back[currentCard].id)
  ) {
    setScore(score + 1);
    setCorrectIds([...correctIds, back[currentCard].id]);
  }
  if (
    back[currentCard].answer !== answer &&
    score > 0 &&
    !wrongIds.includes(back[currentCard].id)
  ) {
    setScore(score - 1);
    setWrongIds([...wrongIds, back[currentCard].id]);
  }
  setIsClicked(true); // Update state to indicate button is clicked
};

export const handleBackClick = (
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setIsClicked(false); // Update state to flip the card back
};

export const handleNext = (
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>,
  setCurrentCard: React.Dispatch<React.SetStateAction<number>>,
  currentCard: number
) => {
  setIsClicked(false);
  setTimeout(() => {
    setCurrentCard(currentCard + 1); //
  }, 100);
};

export const handlePrevious = (
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>,
  setCurrentCard: React.Dispatch<React.SetStateAction<number>>,
  currentCard: number
) => {
  setIsClicked(false);
  setTimeout(() => {
    setCurrentCard(currentCard - 1);
  }, 100); 
};

const HelperFunc = () => {
  // This component doesn't have any JSX, but it's required for Next.js
  return null;
};

export default HelperFunc;

