import React from "react";

import EditTodoForm from "../Forms/EditTodoForm";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onWhichTodoEdit, onEdit, onComplete, onDelete }) => {
  return (
    <ul>
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm
            key={todo.id}
            todo={todo}
            onEdit={onEdit}
            onWhichTodoEdit={onWhichTodoEdit}
          />
        ) : (
          <TodoItem
            key={todo.id}
            todo={todo}
            onWhichTodoEdit={onWhichTodoEdit}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        )
      )}
    </ul>
  );
};

export default TodoList;
