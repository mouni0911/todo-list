import React, { useState } from "react";
import "./ToDoList.css";

const ToDoList = () => {
  const [todo, setTodo] = useState([]);
  const [todoText, setTodoText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const submitForm = (event) => {
    event.preventDefault();

    if (todoText.trim() === "") {
      setErrorMessage("Please provide todo text");
    } else {
      setTodo([...todo, todoText]);
      setTodoText("");
      setErrorMessage("");
    }
  };
  const deleteTodo = (index) => {
    const updatedTodo = [...todo];
    updatedTodo.splice(index, 1);
    setTodo(updatedTodo);
  };
  const clearAll = () => {
    setTodo([]);
  };
  return (
    <div className="todo-list-container">
      <h1>Todo List</h1>
      <form onSubmit={submitForm}>
        <input
          type="text"
          name="todolist"
          id="todolist"
          onChange={(event) => {
            setTodoText(event.target.value);
          }}
          value={todoText}
          placeholder="Enter todo text ..."
        />

        <button type="submit">Add</button>
      </form>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <br />{" "}
      <button className="clear-button" onClick={clearAll}>
        Clear All
      </button>
      <ul className="todo-list">
        {todo.map((todos, index) => (
          <li key={index}>
            {todos}
            <button className="delete-button" onClick={() => deleteTodo(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
