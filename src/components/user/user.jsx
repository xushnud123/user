import { useEffect, useState } from "react";
import firebase from "../../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import classes from "./user.module.scss";

const User = () => {
  const [title, setTitle] = useState();
  const [number, setNumber] = useState();
  useEffect(() => {}, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && number) {
      await addDoc(collection(firebase, "product"), {
        title,
        number,
        completed: false,
      });
      setTitle("");
      setNumber("");
    } else {
      alert(`Formani to'liq to'ldiring`);
    }
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <h1 className={classes.title}>Formalar</h1>
        <form onSubmit={handleSubmit} className={classes.form}>
          <div className={classes.inputs}>
            <input
              type="text"
              className={classes.input}
              value={title}
              placeholder="Name"
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="number"
              className={classes.input}
              value={number}
              placeholder="Rubl"
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <button type="submit" className={classes.btn}>
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default User;
