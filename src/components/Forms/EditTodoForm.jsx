import React, { useState } from "react";

import { validateText } from "../../helpers";

const EditTodoForm = ({ todo, onEdit, onWhichTodoEdit }) => {
  const [inputReceived, setInputReceived] = useState(todo.task);

  const inputIsValid = validateText(inputReceived);
  const formIsValid = inputIsValid && inputReceived.trim() !== todo.task;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formIsValid) {
      onEdit(inputReceived, todo.id);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <label htmlFor="edit-task">Edit a Task</label>
      {!inputIsValid && <span>Please enter a valid task!</span>}
      <input
        className="todo-input"
        id="edit-task"
        type="text"
        minLength="5"
        value={inputReceived}
        onChange={(e) => setInputReceived(e.target.value)}
      />
      <button type="submit" className="todo-btn" disabled={!formIsValid}>
        Edit
      </button>
      <div>
        <button
          type="button"
          className="cancel-todo-btn"
          onClick={() => {
            onWhichTodoEdit(todo.id);
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditTodoForm;
