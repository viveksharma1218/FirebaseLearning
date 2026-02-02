import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
// firebase Auth imports
import { getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword } from "firebase/auth";
// import to interect with Firebase database.
import{getDatabase,set,ref} from "firebase/database"


const firebaseConfig = {
  apiKey: "AIzaSyAnqWkNynguLfZoctjC5BQ-V4a2VULycpw",
  authDomain: "app-8ea54.firebaseapp.com",
  projectId: "app-8ea54",
  storageBucket: "app-8ea54.firebasestorage.app",
  messagingSenderId: "914342466661",
  appId: "1:914342466661:web:067ef1855df9c5690da28c",
  databaseUrl : "https://app-8ea54-default-rtdb.firebaseio.com/"
};
// App initialize with Firebase
const firebaseApp  = initializeApp(firebaseConfig);

// Create logic to SignUp
const firebaseAuth = getAuth(firebaseApp);

// Creating context to share logic to whole App
const FirebaseContext = createContext<any>(undefined);

// Custom hook than can be used
export const useFirebase = ()=>{ return useContext(FirebaseContext)};

export const FirebaseProvider = (props:any)=>{

    const userSignUp = (email:string , password:string)=>{
      return createUserWithEmailAndPassword(firebaseAuth, email , password)
    }
    // Create logic to Signin
    const userSignIn = (email:string,password:string)=>{
      return signInWithEmailAndPassword(firebaseAuth,email,password)
    }
    // Create logic to send data to database.
    const database = getDatabase(firebaseApp);
    const sendData = (key:string,data:any)=>{
      return set(ref(database,key),data)
    }

    return(
      <FirebaseContext.Provider value={{userSignUp,userSignIn,sendData}}>
        {props.children}
      </FirebaseContext.Provider>
    )
}