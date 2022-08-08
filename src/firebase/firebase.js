import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLziRftfB_8onozM9ux1DU9aN-y14qSxA",
  authDomain: "metall-sunnat.firebaseapp.com",
  projectId: "metall-sunnat",
  storageBucket: "metall-sunnat.appspot.com",
  messagingSenderId: "97517923188",
  appId: "1:97517923188:web:32a5db5c3c5e4436fe5a21",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export default database