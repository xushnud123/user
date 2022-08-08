import React from "react";
import classes from './todo.module.scss'
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";

export default function Todo({
  todo,
  toggleComplete,
  handleDelete,
  handleEdit,
}) {
  const [newTitle, setNewTitle] = React.useState(todo.title);

  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };
  return (
    <div className={classes.todo}>
      <input
        style={{ textDecoration: todo.completed && "line-through" }}
        type="text"
        value={todo.title === "" ? newTitle : todo.title}
        className={classes.list}
        onChange={handleChange}
      />
      <div className={classes.btns}>
        <button
          className={classes.complete}
          onClick={() => toggleComplete(todo)}
        >
          <AiFillCheckCircle />
        </button>
        <button
          className={classes.edit}
          onClick={() => handleEdit(todo, newTitle)}
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
  );
}
