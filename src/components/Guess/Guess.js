import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : `cell`;
  return <span className={className}>{letter}</span>;
}

function Guess({ guess, answer, handleGameStatus }) {
  const checkGuessResults = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={checkGuessResults ? checkGuessResults[num].letter : undefined}
          status={checkGuessResults ? checkGuessResults[num].status : undefined}
        ></Cell>
      ))}
    </p>
  );
}

export default Guess;
