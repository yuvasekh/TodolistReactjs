import React from "react";
import { useState } from "react";
import App from "./App";
function Disp(props)
{
 var nlist=[]
nlist=props.list;
console.log(nlist)
const [fdata,setFdata]=useState([])
var page=true;
  var nindex=props.nindex;
    // const [items, setItems] = useState("");
    // const [quantity, setQuantity] = useState("");
    const [cdpage,setCdpage]=useState(false)
    if(nlist!=undefined)
    {
        
        console.log(nlist[nindex],'und')
    console.log(nlist[nindex].items)
    }
    function editdata(e)
    {
        e.preventDefault()
        alert("hit")
        var da=nlist[nindex].items;
        console.log( nlist[nindex].quantity,'qn')
        console.log( nlist[nindex].items,'it')
        // document.getElementById("ite").value = nlist[nindex].items;
        // document.getElementById("quan").value = nlist[nindex].quantity;
        var it=document.getElementById('ite').value
        var qn=document.getElementById("quan").value
        console.log(it,'it');
        console.log(qn,typeof(qn),'formdata');
        if(qn === '' )
        {
            console.log("qn")
            nlist[nindex].quantity=nlist[nindex].quantity;
        
            console.log("qn")
        }
        else
        {
            nlist[nindex].quantity=qn;
            console.log("qn2")
           
        }
        if(it===undefined ||it!=' ')
        {
            nlist[nindex].items=it;
        }
        else{
            nlist[nindex].items=nlist[nindex].items;
           
        }
        console.log(it)
        console.log(qn)
        nlist[nindex].items=it;
      
        console.log(nlist,'updated')
    }
    
    return(
   <>
   {
    cdpage==false?
    <>
   
   <h1>{nlist[nindex].items}</h1>
   <h1>{nlist[nindex].quantity}</h1>
     <form onSubmit={editdata}>
        <div>
        <label>Enter Items</label>
        <input type="text" id="ite"></input>
        <br></br>
        <label>Enter quantity</label>
        <input type="text" id="quan"></input>
        <br></br>
        <input type="submit" value="Edit"/>
        </div>
     </form>
    
      <center>
        <br></br>
      <button onClick={()=>{setCdpage(true)} }>Back</button>
      </center>
  </> :<App nlist={nlist} page={page}/>}
          </>
    )
}
export default Disp