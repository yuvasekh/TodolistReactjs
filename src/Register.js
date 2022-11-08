import React, {  useState } from "react";
import {useNavigate} from "react-router-dom";
function Register()
{
    const [name,setName]=useState()
    const [Email,setEmail]=useState("")
    const [Password,setPassword]=useState("")
    const [MobileNumber,setMobilenumber]=useState("")
    const [newdata,setnewdata]=useState({})
    const navigate = useNavigate();

  const [data,setdata]=useState([])
 function datastoring(e)
 {
    e.preventDefault();
     setnewdata({name:name,Email:Email,Password:Password,MobileNumber:MobileNumber});
   setdata(newdata)
   var arr=localStorage.getItem("Employees");
   var res=  JSON.parse(arr)
   console.log(res,'result')
   if(res)
   {
    res.push({name:name,Email:Email,Password:Password,MobileNumber:MobileNumber});
    localStorage.setItem("Employees",JSON.stringify(res));
   }
   else{
   var a = [];
   a.push({name:name,Email:Email,Password:Password,MobileNumber:MobileNumber})
   localStorage.setItem("Employees",JSON.stringify(a));
   }
 }
    return(<div>
        <h1>Welcome to Register</h1>
        <form onSubmit={datastoring} >
        <br></br>
        <br></br>
        <br></br>
            <label>
                Enter Name
            </label>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
            <br></br>
            <br></br>
            <label>
                Enter Email
            </label>
            <input type="text" value={Email} onChange={(e)=>{setEmail(e.target.value)}} ></input>
            <br></br>
            <br></br>
            <label>
                Enter Password
            </label>
            <input type="text" value={Password} onChange={(e)=>{setPassword(e.target.value)}} ></input>
            <br></br>
            <br></br>
            <label>
                Enter MobileNumber
            </label>
            <input type="text" value={MobileNumber} onChange={(e)=>{setMobilenumber(e.target.value)}} ></input>
            <br></br>
            <br></br>
           
            <input type="submit" value="submit"></input>
        </form>
     
        </div>)
}
export default Register