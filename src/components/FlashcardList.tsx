import React from 'react';
import Flashcard from './Flashcard';
import { Flashcard as FlashcardType } from '../types';

interface FlashcardListProps {
  flashcards: FlashcardType[];
}

const FlashcardList: React.FC<FlashcardListProps> = ({ flashcards }) => {
  return (
    <div className="flashcard-list">
      {flashcards.map((flashcard) => (
        <Flashcard key={flashcard.id} flashcard={flashcard} />
      ))}
    </div>
  );
};

export default FlashcardList;