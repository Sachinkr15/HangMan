import React from "react";
const ALPHABETS = new Array(26)
  .fill("")
  .map((e, index) => String.fromCharCode(index + 65));

function LetterButtons({ usedLetters, onLetterClick }) {
  const selectedLetters = new Set(usedLetters.join("").toUpperCase().split(""));

  const buttonStyle = function (letter) {
    if (selectedLetters.has(letter)) {
      return "bg-red-600 border-red-700 hover:bg-red-700 cursor-not-allowed";
    } else {
      return "bg-blue-600 border-blue-700 hover:bg-blue-700";
    }
  };

  const handleClick = function (event) {
    const character = event.target.value;
    console.log("Clicked letter:", character);
    onLetterClick?.(character);
  };


  const buttons = ALPHABETS.map((letter) => {
    return (
      <button
        value={letter}
        onClick={handleClick}
        key={`button-${letter}`} // Unique key for each button key={letter}
        className={`h-12 w-12 m-1 rounded-md focus:outline-none text-white ${buttonStyle(
          letter
        )}`}
      >
        {letter}
      </button>
    );
  });

  return <>{buttons}</>;
}

export default LetterButtons;
