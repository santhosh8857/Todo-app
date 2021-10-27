import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // to use the bootstrap
import { Container } from "reactstrap"; // to use container from reactstrap
import "./App.css";
import TodoForm from "./Components/TodoForm";

function App() {
  return (
    <Container>
      <h1>Todo App using React</h1>
      <TodoForm />
    </Container>
  );
}

export default App;
