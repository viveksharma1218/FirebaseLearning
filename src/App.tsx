// import {getDatabase , ref , set } from "firebase/database";
// import {app} from  "./firebase.tsx";
import SignUpPage from "./Pages/signUp.tsx"
import SignInPage from "./Pages/signIn.tsx";
import './App.css';
import Senddata from "./Pages/sendData.tsx";
import GoogleSignIn from "./Pages/googleSignIn.tsx";
//instance for realtimedatabase
//const db = getDatabase(app);


function App() {
  // const sendData = ()=>{
  //   set(ref(db, "users/primeUsers"),{
  //     id :'1',
  //     name:'Jack Sparrow',
  //     height : '5.8'
  //   })
  // };
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
    </>
  )
}

export default App
