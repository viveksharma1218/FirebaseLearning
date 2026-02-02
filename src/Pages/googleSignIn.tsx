import { getAuth, GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import{app} from "../firebase.tsx"

function GoogleSignIn(){
  const auth = getAuth(app);
  const googleAuthProvider = new GoogleAuthProvider();

  const signUpWithGoogle = ()=>{
    return signInWithPopup(auth,googleAuthProvider)
  }
  return(
    <div style={{margin:' 3rem',display:'inline-block', border:'1px solid black',padding:'3rem',width:'30vw',borderRadius:'2rem'}}>
      <h1>User Can Sign In with Google also</h1>
      <button onClick={signUpWithGoogle} >Google Sign In</button>
    </div>
  )
}
export default GoogleSignIn;