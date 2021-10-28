import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // to use the bootstrap
import { Container } from "reactstrap"; // to use container from reactstrap
import "./App.css";
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";

function App() {
  const [todos, setTodos] = useState([]); // declaring state as array

  // whenver the change in the dependency (state - todos) execute the callback
  useEffect(() => {
    localStorage.setItem("todos", todos);
    // console.log("there is a change in state(dependency)");
  }, [todos]);

  // whenever the component renders this call back will executed
  useEffect(() => {
    // console.log("components re-renders");
    let localTodos = localStorage.getItem("todos");
    if (localTodos) {
      setTodos(localTodos);
    }
  }, []);

  const addTodo = async (todo) => {
    await setTodos([...todos, todo]); // first we are initializing the current array and adding the new todo

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

      {/* Passing the todos array to the component */}
      <Todos todos={todos} />
    </Container>
  );
}

export default App;
