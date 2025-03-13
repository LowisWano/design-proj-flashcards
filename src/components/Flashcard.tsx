import React, { useState } from 'react';
import { Flashcard as FlashcardType } from '../types';

interface FlashcardProps {
  flashcard: FlashcardType;
}

const Flashcard: React.FC<FlashcardProps> = ({ flashcard }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className={`flashcard ${isFlipped ? 'flipped' : ''}`} 
      onClick={handleFlip}
    >
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <p className='flashcard-question-text'>{flashcard.question}</p>
        </div>
        <div className="flashcard-back">
          <p className='flashcard-question-text'>{flashcard.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;