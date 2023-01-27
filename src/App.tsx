import { useCallback, useEffect, useState } from 'react';
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

    const incorrectLetters = guessedLetters.filter(
        (letter) => !wordToGuess.includes(letter)
    );

    const addGuestedLetter = useCallback(
        (letter: string) => {
            if (guessedLetters.includes(letter)) return;

            setGuessedLetters((currentLetters) => [...currentLetters, letter]);
        },
        [guessedLetters]
    );

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key;

            if (!key.match(/^[a-z]$/)) return;

            e.preventDefault();
            addGuestedLetter(key);
        };

        document.addEventListener('keypress', handler);

        return () => {
            document.removeEventListener('keypress', handler);
        };
    }, [guessedLetters]);

    return (
        <div className='container'>
            <div className='winLoseText'>Win Lose</div>
            <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
            <HangmanWord
                guessedLetters={guessedLetters}
                wordToGuess={wordToGuess}
            />
            <div style={{ alignSelf: 'stretch' }}>
                <Keyboard
                    activeLetter={guessedLetters.filter((letter) =>
                        wordToGuess.includes(letter)
                    )}
                    inactiveLetters={incorrectLetters}
                    addGuessedLetter={addGuestedLetter}
                />
            </div>
        </div>
    );
}

export default App;
