import React, { useState } from "react";
import { Link } from "react-router-dom";
import MaskedTest from "../../MaskedText/MaskedText";
import LetterButtons from "../../LetterButtons/LetterButtons";

function PlayGames() {

  const [usedletters, setUsedLetters] = useState([]);

  const handleLetterClick =  function(letter)  {
    // This function will be called when a letter button is clicked.
    // You can update the state or perform any action you want here.
    setUsedLetters([...usedletters, letter]);
  }


  return (
    <div className="play-games">
      <h1>Play Hangman</h1>

      <MaskedTest text="humble" usedLetters={usedletters} />

      <hr />

      <LetterButtons text="humble" usedLetters={usedletters} onLetterClick={handleLetterClick} />
      <hr />

      <br />
      <br />

      <p>Choose a word and start guessing letters!</p>
      <Link to="/start" className="text-blue-500 underline hover:underline">
        Start a new game
      </Link>
    </div>
  );
}
export default PlayGames;
