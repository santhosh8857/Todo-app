import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // to use the bootstrap
import { Container } from "reactstrap"; // to use container from reactstrap
import "./App.css";
import TodoForm from "./Components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]); // declaring state as array

  const addTodo = (todo) => {
    setTodos([...todos, todo]); // first we are initializing the current array and adding the new todo
    // let arr = todos; // normal way of pushing the data to array
    // arr.push(todo);
    // setTodos(arr);
    console.log(todos);
  };
  return (
    <Container>
      <h1>Todo App using React</h1>
      {/* Passing the addTodo function to the component */}
      <TodoForm addTodo={addTodo} />
    </Container>
  );
}

export default App;
