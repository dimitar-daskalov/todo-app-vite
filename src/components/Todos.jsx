import { useContext, useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import Typed from "react-typed";
import ToastContext from "../context/toast-context";
import AddTodoForm from "./Forms/AddTodoForm";
import TodoList from "./Todos/TodoList";
import ButtonGroup from "./Common/ButtonGroup";
import BackToTopButton from "./Common/BackToTopButton";

const Todos = () => {
  const toastCtx = useContext(ToastContext);
  const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(savedTodos);
  const [filteredTodos, setFilteredTodos] = useState(todos);

  const filterTodos = (option) => {
    if (option === "completed") {
      setFilteredTodos(() => todos.filter((todo) => todo.isCompleted));
    } else if (option === "active") {
      setFilteredTodos(() => todos.filter((todo) => !todo.isCompleted));
    } else {
      setFilteredTodos(() => todos);
    }
  };

  const handleAdd = (task) => {
    setTodos((prevTodos) => [
      {
        id: uuidv4(),
        task,
        isEditing: false,
        isCompleted: false,
      },
      ...prevTodos,
    ]);
    toastCtx.addSuccess("Task added successfully!");
  };

  const handleWhichTodoEdit = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const handleEdit = (receivedInput, id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, task: receivedInput, isEditing: !todo.isEditing }
          : todo
      )
    );
    toastCtx.addSuccess("Task edited successfully!");
  };

  const handleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    toastCtx.addSuccess("Task deleted successfully!");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    setFilteredTodos(todos);
  }, [todos]);

  return (
    <div className="todo-wrapper">
      <h1>
        <Typed
          strings={["Get Tasks Done!", "Complete Todos!"]}
          typeSpeed={150}
          backSpeed={100}
          loop
        />
      </h1>
      <AddTodoForm onAdd={handleAdd} />
      <ButtonGroup
        filterOptions={["all", "active", "completed"]}
        onSelectOption={filterTodos}
      />
      {filteredTodos.length ? (
        <TodoList
          todos={filteredTodos}
          onWhichTodoEdit={handleWhichTodoEdit}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onComplete={handleComplete}
        />
      ) : (
        <h1>No todos found!</h1>
      )}
      <BackToTopButton />
    </div>
  );
};

export default Todos;
