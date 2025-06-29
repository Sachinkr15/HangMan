//container component for TextInputForm
import React from "react";
import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFormContainer({ onSubmit }) {
  const [value, setValue] = useState("");
  const [inputType, setInputType] = useState("password");

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form submitted", value);
    onSubmit?.(value); // Call the onSubmit function if it exists
    // setValue(""); // Clear the input field after submission
  }

  function handleInputChange(event) {
    console.log("Input changed:", event.target.value);
    setValue(event.target.value);
  }

  return (
    <TextInputForm
      handleFormSubmit={handleFormSubmit}
      handleInputChange={handleInputChange}
      value={value}
      inputType={inputType}
      setInputType={setInputType}
    />
  );
}
export default TextInputFormContainer;
