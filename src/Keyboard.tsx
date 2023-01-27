import { useState } from 'react';
import '../src/styles/keyboard.css';
import styles from './Keyboard.module.css';

const KEYS = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
];

type KeyboardProps = {
    activeLetter: string[];
    inactiveLetters: string[];
    addGuessedLetter: (letter: string) => void;
};

export function Keyboard({
    activeLetter,
    inactiveLetters,
    addGuessedLetter,
}: KeyboardProps) {
    return (
        <div className='keyboard'>
            {KEYS.map((key) => {
                const isActive = activeLetter.includes(key);
                const inActive = inactiveLetters.includes(key);
                return (
                    <button
                        onClick={() => addGuessedLetter(key)}
                        className={`${styles.btn} ${
                            isActive ? 'btn-active' : ''
                        } ${inActive ? 'btn-inactive' : ''}`}
                        disabled={isActive || inActive}
                        key={key}>
                        {key}
                    </button>
                );
            })}
        </div>
    );
}
