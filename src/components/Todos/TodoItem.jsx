import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrash,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "../Common/Modal";

const TodoItem = ({ todo, onWhichTodoEdit, onComplete, onDelete }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <li className="todo">
        <div>
          <p
            title={todo.task}
            className={`text-truncate ${todo.isCompleted ? "completed" : ""}`}
            onClick={() => onComplete(todo.id)}
          >
            {todo.task}
          </p>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faPenToSquare}
            onClick={() => !todo.isCompleted && onWhichTodoEdit(todo.id)}
            className={todo.isCompleted ? "fa-disabled" : ""}
          />
          <FontAwesomeIcon icon={faTrash} onClick={() => setShowModal(true)} />
        </div>
      </li>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <>
            <div className="modal-icon">
              <FontAwesomeIcon icon={faTriangleExclamation} size="2xl" bounce />
            </div>
            <h3>Are you sure you want to delete this task?</h3>
            <div className="modal-buttons">
              <button
                type="button"
                className="cancel-modal-btn"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="delete-modal-btn"
                onClick={() => onDelete(todo.id)}
              >
                Delete
              </button>
            </div>
          </>
        </Modal>
      )}
    </>
  );
};

export default TodoItem;
