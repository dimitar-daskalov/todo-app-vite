import React, { useState } from "react";

import { validateText } from "../../helpers";

const AddTodoForm = ({ onAdd }) => {
  const [inputReceived, setInputReceived] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const validInput = validateText(inputReceived);
  const formIsInvalid = !validInput && isTouched;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formIsInvalid && validInput) {
      onAdd(inputReceived);
      setInputReceived("");
      setIsTouched(false);
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="add-task">
          Create a new Task
        </label>
        {formIsInvalid && <span>Please enter a valid task!</span>}
      </div>
      <input
        className="todo-input"
        id="add-task"
        type="text"
        minLength="5"
        value={inputReceived}
        onChange={(e) => setInputReceived(e.target.value)}
        onBlur={() => setIsTouched(true)}
      />
      <button className="todo-btn" type="submit" disabled={!validInput}>
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
