import React from 'react';

const HangmanWord = () => {
  let guessedLetter = ['t', 'e', 'g', 't'];
  const word = 'test';
  return (
    <div
      style={{
        display: 'flex',
        gap: '.25rem',
        fontSize: '4rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: 'monospace',
      }}>
      {word.split('').map((letter, index) => (
        <span key={index} style={{ borderBottom: '.1em solid black' }}>
          <span
            style={{
              visibility: guessedLetter.includes(letter) ? 'visible' : 'hidden',
            }}>
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
