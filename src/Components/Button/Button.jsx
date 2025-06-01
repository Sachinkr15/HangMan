import React from "react";
import getButtonStyling from "./getStyleType.js";

function Button({ buttonType ,  onClickHandler, text, styleType }) {
  return (
    <button
      type={buttonType}
      onClick={onClickHandler}
      className={`px-4 py-2 ${getButtonStyling(
        styleType
      )}  text-white rounded-md transition-all`}
    >
      {text}
    </button>
  );
}

export default Button;
