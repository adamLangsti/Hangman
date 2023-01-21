import React, { useState } from 'react';
import words from './wordList.json';
import '../src/styles/main.css';
import { HangmanDrawing } from './HangmanDrawing';
import { HangmanWord } from './HangmanWord';
import { Keyboard } from './Keyboard';

function App() {
    const [wordToGuess, setWordToGuess] = useState(() => {
        return words[Math.floor(Math.random() * words.length)];
    });
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

    return (
        <div className='container'>
            <div className='winLoseText'>Win Lose</div>
            <HangmanDrawing />
            <HangmanWord />
            <div style={{ alignSelf: 'stretch' }}>
                <Keyboard />
            </div>
        </div>
    );
}

export default App;
