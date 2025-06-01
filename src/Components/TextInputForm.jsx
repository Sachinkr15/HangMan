//Presentation Component for the TextInputForm: 
import TextInput from "./TextInput";
import Button from "./Button/Button";
import React from "react";

function TextInputForm({  handleFormSubmit , handleInputChange , value, inputType = 'text',setInputType }) {

  return (
    <div>
      <form className="flex items-end gap-2" onSubmit={handleFormSubmit}>
        <div className=" mr-2 flex-1">
          <TextInput
            label="Enter a words or Phrase"
            type= {inputType}
            value={value}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <Button
            styleType={"warning"}
            buttonType="button"
            text={inputType === "password" ? "Show" : "Hide"}
            onClickHandler={() =>
              setInputType(inputType === "password" ? "text" : "password")
            }
          />
        </div>

        <div className="flex">
          <Button type="submit" text="OK" styleType={"primary"} />
        </div>
      </form>
    </div>
  );
}

export default TextInputForm;
