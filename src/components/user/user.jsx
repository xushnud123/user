import { useEffect, useState } from "react";
import firebase from "../../firebase/firebase";
import { collection,addDoc } from "firebase/firestore";
import classes from "./user.module.scss";
import { async } from "@firebase/util";

const User = () => {
  const [title, setTitle] = useState();
  useEffect(() => {}, []);
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(title !== ''){
        await addDoc(collection(firebase,'product'),{
            title,
            completed:false,
        })
        setTitle('')
    }
  };
  return (
    <div className={classes.wrapper}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <input
          type="number"
          className={classes.title}
          value={title}
          placeholder="rubl"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className={classes.btn}>Add</button>
      </form>
    </div>
  );
};

export default User;
