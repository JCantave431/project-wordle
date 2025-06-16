import React from "react";

function GuessInput({handleSubmitGuess, gameStatus}) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.info({ tentativeGuess });
    handleSubmitGuess(tentativeGuess)
    setTentativeGuess("");
  }

  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          disabled={gameStatus != "running"}
          required
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          type="text"
          value={tentativeGuess}
          onChange={(event) => {
            setTentativeGuess(event.target.value.toUpperCase());
          }}
        />
      </form>
    </div>
  );
}

export default GuessInput;
