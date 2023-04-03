import React from "react";

const ButtonGroup = ({ filterOptions, onSelectOption }) => {
  return (
    <div className="button-group">
      {filterOptions.map((option) => (
        <button key={option} type="button" onClick={() => onSelectOption(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
