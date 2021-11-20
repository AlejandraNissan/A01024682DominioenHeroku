import getFirebase from "../firebase/firebaseconfiguration";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebase = getFirebase();
const auth = getAuth();

export default function Test() {
    console.log(auth.currentUser);
}
