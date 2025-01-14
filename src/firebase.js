import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAcpyOBmiIBZ7Rv8eXu20mNz55wAxXkcB8",
  authDomain: "netflix-clone-60262.firebaseapp.com",
  projectId: "netflix-clone-60262",
  storageBucket: "netflix-clone-60262.firebasestorage.app",
  messagingSenderId: "41932230702",
  appId: "1:41932230702:web:eed0edb282185380540fbf"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid, 
            name,
            authProvider: "local", 
            email,
        })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}


const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
       
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = async () => {
    signOut(auth);
}

export {auth, db, login, signup, logout}