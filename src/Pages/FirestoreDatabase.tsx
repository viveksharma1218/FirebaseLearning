import{useState} from "react"
import { getFirestore,collection,addDoc,doc,getDoc,query,where,getDocs} from "firebase/firestore";
import{app} from "../firebase.tsx"

const firestore = getFirestore(app);
function FirestoreDatabase(){
  const [name,setName] = useState("");
  const [Qty, setQty]  =  useState("");
  const [price ,setPrice] = useState("");
  const[disabled,setDisabled] = useState(false);
  const [productId,setProductId] = useState('');
  const[oneProduct,setOneProduct] =useState<any>({
      ProductName:'',
      ProductQty:'',
      ProductPrice:''
    });
  const [ disabled2 , setDisabled2]  = useState(false);
  const[cartItems,setCartItems] = useState<any>([]);

  const sendData = async ()=>{
    setDisabled(true);
    const collectionRef = collection(firestore,'cart');
    const result =  await addDoc(collectionRef,{
      ProductName:name,
      ProductQty:Qty,
      ProductPrice:price,
      CartItem:true
    });
    setTimeout(() => {
      setDisabled(false);
    }, 1500);
    setName('');
    setQty('');
    setPrice('');
    console.log(result);
  }
  const makeOrder = async (data:any)=>{
    const collectionRef = collection(firestore,'order');
    const result = await addDoc(collectionRef,data);
    console.log(result)
  }
  const receiveData = async (id:string)=>{
    const docRef = doc(firestore,'cart',id);
    const snapshot = await getDoc(docRef,);
        setOneProduct(snapshot.data())
  }
  const receiveDataWithQuery = async ()=>{
    setDisabled2(true);
    const q = query(collection(firestore,'cart'),where('CartItem' ,"==", true));
    const querySnapshot = await getDocs(q);
    const items = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    setCartItems(items);
        setTimeout(() => {
          setDisabled2(false)
        }, 1500);
  }
  return(
    <div>
      <h1>How to Use FireStore Database</h1>
      <div className="box">
        <h3>how to Send data</h3>
        <input value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Product name"/><br/><br/>
        <input value={Qty} onChange={(e)=>{setQty(e.target.value)}} placeholder="Product Qty" /><br/><br/>
        <input value={price} onChange={(e)=>[setPrice(e.target.value)]} placeholder="Price of Product"/><br/><br/>
        <button onClick={sendData} disabled={disabled} >Add to Cart</button>
      </div>
      <div className="box">
        <p>get data with id :</p>
        <input  value={productId} onChange={(e)=>{setProductId(e.target.value)}} placeholder="paste id of any product"/>
        <button style={{margin:'0'}} onClick={()=>{receiveData(productId)}} >Receive Data</button>
        <h3>{oneProduct.ProductName}</h3>
        <h3>{oneProduct.ProductPrice}</h3>
        <h3>{oneProduct.ProductQty}</h3>
      </div>
      <div className="box">
        <button disabled={disabled2} onClick={receiveDataWithQuery}>Receive all Cart Items</button>
        {cartItems.map((data:any)=>{
          return(<div key={data.id} className="smallBox">
            <p>Product Id : {data.id}</p>
            <p>Product Name :{data.ProductName}</p>
            <p>Product Price : {data.ProductPrice}</p>
            <p>Product Qty : {data.ProductQty}</p>
            <button onClick={()=>{makeOrder({
                    ProductName:data.ProductName,
                    ProductQty:data.ProductQty,
                    ProductPrice:data.ProductPrice,
                    OrderItem:true
            })}} style={{marginBottom:'0'}}>Buy Product</button>
            <p>this data is going to order collection.</p>
          </div>) 
        })}
      </div>
    </div>
  )
}
export default FirestoreDatabase;