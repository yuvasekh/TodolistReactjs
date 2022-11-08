import "./App.css";
import Disp from "./Disp"
import { useEffect, useState,Fragment } from "react";
import useNavigate from "react";
import disp from "./Disp";
import { isDisabled } from "@testing-library/user-event/dist/utils";

function App(props) {
  const [list, setList] = useState([]);
  const [items, setitems] = useState("");
  const [quantity, setquantity] = useState("");
  const [page,setcpage]=useState(true)
  const [nindex,setnIndex]=useState('initial')
  var abc=props.nlist;
  console.log(props.nlist,'data from')
  //  function handlevalues(e)
  //  {
  //     e.preventDefault();
  //     var dat={items:items,quantity:quantity}
  //     console.log(dat)
  //     setValue(dat)
  //  }
 
  console.log(props.page,'yuva ')
  var settingpage=props.page;
  useEffect(() => {
    console.log(list);
  }, [list]);
  function submit(e) {
    e.preventDefault();
    var dat = { items: items, quantity: quantity };
    setList([...list, dat]);
    console.log(list, "array");
    // document.getElementById("resform").reset();
  }

const dis = () => {
  document.getElementById("deletebutton").disabled=true
  document.getElementById("editbutton").disabled=true
 
}
function doub()
{ 

  document.getElementById("deletebutton").disabled=false
  document.getElementById("editbutton").disabled=false
}
  function deletefun(index) {
  
    console.log(
      "called",index)
      const data=[]
      // console.log(index)
      // list.splice(index,1)
      // setList(list)
      // console.log(list)
      for(var i=0;i<list.length;i++)
      {
        if(settingpage!=undefined)
        {
          if(index!=i)
          {
            console.log("called abc")
            data.push(abc[i])
          }
          setList(abc)

        }
        else
        {
        if(index!=i)
        {
          data.push(list[i])
          
        }
        setList(data)
      }

      }
      document.getElementById("subd").disabled=true
     
  }
  function editfun(index)
    {
      if(settingpage!=undefined)
      {
        setList(abc)
      
    
        setcpage(false)
        setnIndex(index)

      }
      else
      {
setnIndex(index)

      setcpage(false)
      console.log(nindex)
      }
    }
    if(page==false)
    {
      console.log("if called")
      return(<Disp list={list} nindex={nindex}/>)
    }
    else{
      console.log("else called")
  return (
    <>
  
      <form onSubmit={submit} id="resform">
        <center>
          <h1>TodoList</h1>
          <label>Enter item</label>
          <input
            type="text"
            value={items}
            onChange={(e) => {
              setitems(e.target.value);
            }}
          ></input>
          <br></br>
          <label>Enter quantity</label>
          <input
            type="text"
            value={quantity}
            onChange={(e) => {
              setquantity(e.target.value);
            }}
          ></input>
          <br></br>
          <input type="submit" value="+"></input>
          {/* <div onClick={()=>{submit()}}>+</div> */}
        </center>
      </form>
      <div>
      {list.map((item, index) => (
        <div id="db" key={index}>
          <center>
            <div className="rows">
              <div style={{ marginLeft: '5rem' }} >{item.items}</div>
              <div style={{ marginLeft: '5rem' }}  >{item.quantity}</div>
           
            <button id="deletebutton"
              onClick={() => {
                deletefun(index);
              }} style={{ marginLeft: '3rem' }} 
            >
              delete
            </button>
            <button id="subd"
              onClick={() => {dis()
              
              }} style={{ marginLeft: '3rem' }} onDoubleClick={()=>{doub()}}
            >
              Disable
            </button>
            <button id="editbutton"
              onClick={() => {
                editfun(index)
          
              }} style={{ marginLeft: '3rem' }} 
            >
             Edit
            </button>
            </div>
          </center>
        </div>
      ))}
      {
        abc===undefined?<></>:<>
        
{abc.map((item, index) => (
  <div id="db" key={index}>
    <center>
      <div className="rows">
        <div style={{ marginLeft: '5rem' }} >{item.items}</div>
        <div style={{ marginLeft: '5rem' }}  >{item.quantity}</div>
     
      <button id="deletebutton"
        onClick={() => {
          deletefun(index);
        }} style={{ marginLeft: '3rem' }} 
      >
        delete
      </button>
      <button id="subd"
        onClick={() => {dis()
        
        }} style={{ marginLeft: '3rem' }} onDoubleClick={()=>{doub()}}
      >
        Disable
      </button>
      <button id="editbutton"
        onClick={() => {
          editfun(index)
        }} style={{ marginLeft: '3rem' }} 
      >
       Edit
      </button>
      </div>
    </center>
  </div>

))}
</>
      }

      </div>
    </>
 );
            }
}

export default App;
