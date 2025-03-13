import React from 'react';
import FlashcardList from './FlashcardList';
import flashcardsData from '../data/flashcards.json';
import { Flashcard } from '../types';
import '../styles/App.css';

const App: React.FC = () => {
  const flashcards: Flashcard[] = flashcardsData;

  return (
    <div className="home">
      <FlashcardList flashcards={flashcards} />
    </div>
  );
};

export default App;