
type Card = {
    question: string;
    answer: string;
  };
  
  export const getCards = async (): Promise<Card[]> => {
    const res = await fetch("./api/card");
    const json = await res.json();
    return json.data;
  };
  
  export const getFronts = (cards: Card[]): string[] => {
    return cards.map((card) => card.question);
  };
  
  export const getBacks = (cards: Card[]): string[] => {
    return cards.map((card) => card.answer);
  };
  
  export const checkAnswer = (
    event: React.MouseEvent<HTMLButtonElement>,
    back: string[],
    currentCard: number,
    score: number,
    setScore: React.Dispatch<React.SetStateAction<number>>,
    setIsClicked: React.Dispatch<React.SetStateAction<boolean>>,
    )=>{  let answer = (event.target as HTMLButtonElement).value;
        if (back[currentCard] === answer) {
            setScore(score + 1);
          }
          if (back[currentCard] != answer && score > 0) {
            setScore(score - 1);
          }
          setIsClicked(true); // Update state to indicate button is clicked
        }
 
  
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
  