import React from "react";

function TextInput({ label, type = "text", value, onChange }) {
  return (
    <label className="block mb-4">
      {label && (
        <span className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </span>
      )}
      <input
        className="px-4 py-2 border border-gray-500  w-full rounded-md "
        type={type}
        value={value}
        onChange={onChange}
        placeholder={label}
      />
    </label>
  );
}

export default TextInput;
