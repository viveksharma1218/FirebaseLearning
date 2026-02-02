import { useState } from "react";
import { useFirebase } from "../context/FirebaseContext.tsx";
// import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
// import {app} from "../firebase.tsx";

//const auth =getAuth(app);
function SignUpPage (){
  const [email , setEmail ]  = useState('');
  const [password , setPassword] = useState('');

  const firebase = useFirebase();
  //console.log(firebase);

  // const createUser = ()=>{
  //   createUserWithEmailAndPassword(auth , email , password).then((res)=>{
  //     alert('User Created Successfully!');
  //     console.log(res);
  //   })
  // }
    
  return(
    <div style={{margin:' 3rem',display:'inline-block', border:'1px solid black',padding:'3rem',width:'30vw',borderRadius:'2rem'}}>
      <h3>Create New User</h3>
      <input  value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Write your email"/>
      <br/><br/>
      <input  value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="write your password" />
      <br/>
      <button onClick={()=>{firebase.userSignUp(email,password)}}>SignUp</button>
      <p>Learning firebase Authentication with email(signup)</p>
    </div>

  )
}
export default SignUpPage;