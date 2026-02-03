//import { useFirebase } from "../context/FirebaseContext"
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase,set,ref,child,get, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAnqWkNynguLfZoctjC5BQ-V4a2VULycpw",
  authDomain: "app-8ea54.firebaseapp.com",
  projectId: "app-8ea54",
  storageBucket: "app-8ea54.firebasestorage.app",
  messagingSenderId: "914342466661",
  appId: "1:914342466661:web:067ef1855df9c5690da28c",
  databaseUrl : "https://app-8ea54-default-rtdb.firebaseio.com/"
};
const App = initializeApp(firebaseConfig);
const db = getDatabase(App);

const sendData = (id:string,name:string)=>{
  set(ref(db,'users/PrimeUsers/ultraPrimeUsers'),{
    id:id,
    name:name
  })
}
const getRef = ref(db)
const readData = ()=>{
  get(child(getRef,'users/PrimeUsers/ultraPrimeUsers')).then((snapshot=>{
    if(snapshot.exists()){console.log(snapshot.val())}
  })).catch((err)=>{console.log(err)})
}


function RealtimeDatabase(){
  const [id,setId] = useState('');
  const[name,setName] = useState('');
  const[data,setData] = useState({id:'',name:''});
  //const firebase = useFirebase();

// we are using useEffect because onvalue is getting updated value on realtime
// to stop many renders we are using useEffect
useEffect(()=>{
  onValue(ref(db,'users/PrimeUsers/ultraPrimeUsers'),(snapshot)=>{
    //console.log(snapshot.val())
    setData(snapshot.val())
  })
},[])
  return(
    <div>
      <h1>How to use Realtime data base</h1>
            <div style={{margin:' 3rem',display:'inline-block', border:'1px solid black',padding:'3rem',width:'30vw',borderRadius:'2rem'}}>
              <h3>Send data to firebase Realtime database</h3>
              <input value={id} onChange={(e)=>{setId(e.target.value)}} placeholder="write your id" /><br/><br/>
              <input value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="write your name"/>
              <button onClick={()=>{sendData(id,name)}} >Send</button>
              <button onClick={readData} >read in console</button>
              <h3> This is real time data make changes to see</h3>
              <h5>Using onValue Method inside useEffect</h5>
              <p>this is Id: {data.id}</p>
              <p>this is name: {data.name}</p>
            </div>
    </div>

  )
}
export default RealtimeDatabase;