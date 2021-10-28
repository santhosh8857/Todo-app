import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const Todos = (props) => {
  return (
    <ListGroup className="mt-5 mb-3">
      {props.todos.map((todo, key) => {
        return <ListGroupItem key={key}>{todo}</ListGroupItem>;
      })}
    </ListGroup>
  );
};

export default Todos;
