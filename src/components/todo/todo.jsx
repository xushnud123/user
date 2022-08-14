/* eslint-disable react/prop-types */
import React from "react";
import classes from "./todo.module.scss";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";

export default function Todo({
  todo,
  toggleComplete,
  handleDelete,
  handleEdit,
}) {
  const [newNumber, setNewNumber] = React.useState(todo.number);

  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewNumber(todo.number);
    } else {
      todo.number = "";
      setNewNumber(e.target.value);
    }
  };
  return (
    <div className={classes.todo}>
      <div className={classes.card}>
        <div className={classes.inputs}>
          <label htmlFor={`${todo.title}`}>{todo.title}</label>
          <input
            style={{ textDecoration: todo.completed && "line-through" }}
            type="number"
            value={todo.number === "" ? newNumber : todo.number}
            className={classes.list}
            onChange={handleChange}
            id={`${todo.title}`}
          />
        </div>
        <div className={classes.btns}>
          <button
            className={classes.complete}
            onClick={() => toggleComplete(todo)}
          >
            <AiFillCheckCircle />
          </button>
          <button
            className={classes.edit}
            onClick={() => handleEdit(todo, newNumber)}
          >
            <AiOutlineEdit />
          </button>
          <button
            className={classes.delete}
            onClick={() => handleDelete(todo.id)}
          >
            <AiOutlineDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
