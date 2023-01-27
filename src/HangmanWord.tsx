import '../src/styles/hangmanword.css';

type HangmanWordProps = {
    guessedLetters: string[];
    wordToGuess: string;
};

export function HangmanWord({ guessedLetters, wordToGuess }: HangmanWordProps) {
    return (
        <div className='wordContainer'>
            {wordToGuess.split('').map((letter, index) => (
                <span key={index} className='letters'>
                    <span
                        className={
                            guessedLetters.includes(letter)
                                ? 'letter-visible'
                                : 'letter-invisible'
                        }>
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    );
}
