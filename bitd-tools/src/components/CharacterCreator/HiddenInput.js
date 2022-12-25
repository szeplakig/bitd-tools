import React from "react";
import { FaEdit } from "react-icons/fa";

function HiddenInput({ show, value, handleChange, handleBlur, handleClick }) {
  return (
    <span>
      {show ? (
        <input
          type="number"
          min={0}
          step={1}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
          className="text-black inline-flex"
          required
        />
      ) : (
        <span className="inline-flex">
          {value}
          <FaEdit
            size={20}
            onClick={handleClick}
            className="ml-2 m-auto cursor-pointer"
          />
        </span>
      )}
    </span>
  );
}

export default HiddenInput;
