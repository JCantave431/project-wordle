import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";

function PreviousGuesses({ guesses, answer }) {
  return (
    /*<div className="guess-results">
      {guesses.map((guess, index) => (
        <p key={index} className="guess">{guess}</p>
      ))}
    </div>*/
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num, index) => (
        <Guess
          key={index}
          guess={guesses[index]}
          answer={answer}
        ></Guess>
      ))}
    </div>
  );
}

export default PreviousGuesses;
