import '../src/styles/hangmanword.css';

export function HangmanWord() {
    const word = 'test';
    const guessedLetters = ['t', "s", "f"];
    return (
        <div className='wordContainer'>
            {word.split('').map((letter, index) => (
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
