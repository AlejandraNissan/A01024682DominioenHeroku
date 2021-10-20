import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1VH5L-Rmj_seu3PqMeaCiNXQKGizW93c",
  authDomain: "fir-authlabweb-d36b7.firebaseapp.com",
  projectId: "fir-authlabweb-d36b7",
  storageBucket: "fir-authlabweb-d36b7.appspot.com",
  messagingSenderId: "611537457346",
  appId: "1:611537457346:web:6aa2a0847b9e45f00eab5b"
};

let instance;

export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance;
    instance = firebase.initializeApp(firebaseConfig);
    return instance;
  }
  return null;
}
