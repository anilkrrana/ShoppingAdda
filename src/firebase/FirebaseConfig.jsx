// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs7AFdITUnOWNmU7B_4tWau7uVqNboLrw",
  authDomain: "shoppingadda-c46eb.firebaseapp.com",
  projectId: "shoppingadda-c46eb",
  storageBucket: "shoppingadda-c46eb.appspot.com",
  messagingSenderId: "615647415489",
  appId: "1:615647415489:web:08a9634383988e55589840"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app)

export {fireDB,auth } ;