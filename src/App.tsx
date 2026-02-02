import {getDatabase , ref , set } from "firebase/database";
import {app} from  "./firebase.tsx";
import SignUpPage from "./signUp.tsx"
import './App.css'
//instance for realtimedatabase
const db = getDatabase(app);


function App() {
  const sendData = ()=>{
    set(ref(db, "users/primeUsers"),{
      id :'1',
      name:'Jack Sparrow',
      height : '5.8'
    })
  };
  return (
    <>
    <h1>Firebae Leaning </h1>
    <button onClick={sendData}>sendData</button>
    <SignUpPage></SignUpPage>
    </>
  )
}

export default App
