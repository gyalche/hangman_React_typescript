import React from 'react';

const HangmanWord = () => {
  let guessLetter = ['t'];
  const word = 'dawa';
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
        <span style={{ borderBottom: '.1em solid black' }}>
          <span
            style={{
              visibility: guessLetter.includes(letter) ? 'visible' : 'hidden',
            }}>
            {index}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
