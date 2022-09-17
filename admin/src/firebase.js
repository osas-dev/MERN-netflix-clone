import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCaHb7pTAhPhJgKbyUBFadE0_i_U26C9RQ",
  authDomain: "netlfix-78335.firebaseapp.com",
  projectId: "netlfix-78335",
  storageBucket: "netlfix-78335.appspot.com",
  messagingSenderId: "219502055963",
  appId: "1:219502055963:web:eb62c83a2b5ac7c9e35ebe",
  measurementId: "G-0WRKWBHSBL"
};


firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;