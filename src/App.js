/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react";
import Todo from "./components/todo/todo";
import User from "./components/user/user";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import firebase from "./firebase/firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const date = new Date().getDate();
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  useEffect(() => {
    const q = query(collection(firebase, "product"));
    const unSub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) =>
        todosArray.push({ ...doc.data(), id: doc.id })
      );
      setTodos(todosArray);
    });
    return () => unSub();
  }, []);

  const handleEdit = async (todo, number) => {
    await updateDoc(doc(firebase, "product", todo.id), {
      number: number,
      date: date,
      year: year,
      month:month+1
    });
  };
  const toggleComplete = async (todo) => {
    await updateDoc(doc(firebase, "product", todo.id), {
      completed: !todo.completed,
    });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(firebase, "product", id));
  };
  return (
    <div>
      <User />
      <div style={{ marginBottom: 20 }}>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
