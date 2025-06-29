import React from "react";
import {  useNavigate } from "react-router-dom";
import TextInputFormContainer from "../../TextInputFormContainer";

function StartGame() {

  const navigate = useNavigate();

  function handleSubmit() {
    navigate("/play");
    // This function is called when the form is submitted.
  }

  return (
    <div className="start-game">
      <h1>Welcome to Hangman!</h1>
      <p>Get ready to guess the word letter by letter.</p>
      <TextInputFormContainer onSubmit={handleSubmit} />
    </div>
  );
}
export default StartGame;
