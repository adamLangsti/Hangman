import '../src/styles/hangmanword.css';

export function HangmanWord() {
    const word = 'test';
    return (
        <div className='wordContainer'>
            {word.split('').map((letter, index) => (
                <span key={index} className='letters'>
                    {letter}
                </span>
            ))}
        </div>
    );
}
