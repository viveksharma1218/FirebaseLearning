// import {getDatabase , ref , set } from "firebase/database";
import {app} from  "./firebase.tsx";
import SignUpPage from "./Pages/signUp.tsx"
import SignInPage from "./Pages/signIn.tsx";
import './App.css';
import Senddata from "./Pages/sendData.tsx";
import GoogleSignIn from "./Pages/googleSignIn.tsx";
//instance for realtimedatabase
//const db = getDatabase(app);

import { getAuth,onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect, useState } from "react";

import FireStoreDatabase from "./Pages/FirestoreDatabase.tsx"

const auth = getAuth(app);

function App() {
  // const sendData = ()=>{
  //   set(ref(db, "users/primeUsers"),{
  //     id :'1',
  //     name:'Jack Sparrow',
  //     height : '5.8'
  //   })
  // };

  const [isloggedin, setIsLoggedIn] = useState(false);
  const [user,setUser] = useState<any>();

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setIsLoggedIn(true);
        setUser(user);
      }
      else{
        setIsLoggedIn(false)
      }
    })
  },[])
  if(!isloggedin){
    return (
    <>
    <h1>Firebase Learning </h1>
    {/* <button onClick={sendData}>sendData</button> */}
    <br/>
    <h2 style={{margin:'3rem',marginBottom:'0'}} >Firebase Authentication with Email</h2>
    <SignUpPage></SignUpPage>
    <SignInPage></SignInPage>
    <Senddata></Senddata>
    <GoogleSignIn></GoogleSignIn>
    <FireStoreDatabase></FireStoreDatabase>
    </>
  )
  }
  else{
   return(
    <div>
      <h1>Welcome User of this email Id : {user && user.email}</h1>
      <button onClick={()=>{signOut(auth)}}>Sign Out</button>
      <FireStoreDatabase></FireStoreDatabase>
    </div>
   ) 
  }

}

export default App
