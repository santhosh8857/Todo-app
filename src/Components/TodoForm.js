import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

const TodoForm = (props) => {
  const [newtodo, setNewtodo] = useState(""); // state to store the newtodo from input field

  // function to handle submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(newtodo);
    setNewtodo("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          {/* onChange event to take the input value in the input field */}
          <Input
            type="text"
            name="todo"
            value={newtodo}
            placeholder="Enter your task"
            onChange={(e) => {
              setNewtodo(e.target.value);
            }}
          />
          <InputGroupAddon addonType="prepend">
            <Button color="success">Add Todo</Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
