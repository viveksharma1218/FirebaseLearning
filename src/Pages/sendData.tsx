import { useFirebase } from "../context/FirebaseContext"
import { useState } from "react";



function Senddata(){
  const [id,setId] = useState('');
  const[name,setName] = useState('');
  const firebase = useFirebase();
  return(
    <div style={{margin:' 3rem',display:'inline-block', border:'1px solid black',padding:'3rem',width:'30vw',borderRadius:'2rem'}}>
      <h3>Send data to firebase Realtime database</h3>
      <input value={id} onChange={(e)=>{setId(e.target.value)}} placeholder="write your id" /><br/><br/>
      <input value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="write your name"/>
      <button onClick={()=>{firebase.sendData(id,name)}} >Send</button>

    </div>
  )
}
export default Senddata;