import React from "react";
import { Link } from "react-router-dom";
import MaskedTest from "../../MaskedText/MaskedText";
import LetterButtons from "../../LetterButtons/LetterButtons";

function PlayGames() {
  return (
    <div className="play-games">
      <h1>Play Hangman</h1>

      <MaskedTest text="humble" usedLetters={["b", "e"]} />

      <hr />
  
      <LetterButtons usedLetters={['b' , 'e']}/>
      <hr />
     
      <br /> 
      <br />
      
      <p>Choose a word and start guessing letters!</p>
    </div>
  );
}
export default PlayGames;
