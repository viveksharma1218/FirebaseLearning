import { useState } from "react";
import{getAuth , signInWithEmailAndPassword} from "firebase/auth" ;
import {app}  from "../firebase.tsx";

  const auth = getAuth(app);

function SignInPage (){
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = ()=>{
    signInWithEmailAndPassword(auth , email, password).then((res)=>{
      alert('sign in successfully');
      console.log(res)
    }).catch((err)=>{console.log(err)})
  }

  return(
    <div style={{display:'inline-block', border:'1px solid black',padding:'3rem',width:'30vw',borderRadius:'2rem'}} >
      <h3>SignIn</h3>
      <input value={email} onChange={(e)=>{ setEmail(e.target.value)}} placeholder="write your email here" />
      <br/><br/>
      <input value={password} onChange={(e)=>[setPassword(e.target.value)]} placeholder="write your password here" />
      <br/>
      <button onClick={signIn} >Sign In</button>
      <p>Learning firebase Authentication with email(signin)</p>
    </div>
  )
}
export default SignInPage;