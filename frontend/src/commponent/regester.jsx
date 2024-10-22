import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Field, Label } from "@headlessui/react";
import axios from "axios";
import { useState } from "react";

const Rgx =({ setLogout})=>{
    const  obj ={
        firstName :"",
        LastName:"",
        Password:"",
        Mail:""
      
        }
      const [stata ,setStata]= useState(obj);
      const [errpassword ,setErrpassword]=useState("");
    const [erremail ,setErremail]=useState("");
    const [errserver ,setErrserver]=useState("");
    const [name ,setName]= useState("")
    const [lastname ,setLastname]= useState("")
    const navigator =useNavigate()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // تعبير عادي للتحقق من صحة البريد الإلكتروني
    const passwordRegex = /^[A-Za-z0-9]{8,}$/;
    const nameRegex = /^[A-Za-z]{2,}$/;
      const handler =(e)=>{
          setStata((old)=>{
            return{...old,[e.target.name]:e.target.value}
          })
      }
      const submitHandler =async()=>{
        setErrpassword("");
        setErremail("");
        setErrserver("");
        setName("");
        setLastname("");
       // setLogout(false);
        let vaild =true;
        if(!stata.Mail){
            setErremail( "empty email");
            vaild =false;
        }
        else if(!emailRegex.test(stata.Mail)){
            setErremail("invalid email")
            vaild =false;
    
        }
        if(!stata.Password){
            setErrpassword("empty password")
            vaild =false;
    
        }
        else if(!passwordRegex.test(stata.Password)){
            setErrpassword("must br at least 8");
            vaild =false;
    
        }
        if(!stata.firstName){
            setName("empty name")
        }
        else if(!nameRegex.test(stata.firstName)){
            setName("must be at least 2")

        }
        if(!stata.LastName){
            setLastname("empty name")
        }
        else if(!nameRegex.test(stata.LastName)){
            setLastname("must be at least 2")

        }
        if(!vaild)return ;
        try{
            const Data =await axios.post("http://localhost:3000/api/regester",stata);
            navigator("/login")
        }
        catch(error){
            setErrserver("this email is used aleardy")
        }
            
        
      }
    return<>
           <h1 className='text-white text-2xl font-bold mx-7 my-9'> Regest</h1>
    <div className="flex justify-center my-16 box-content shadow-lg shadow-white p-6 max-w-md mx-auto bg-slate-950 border border-white rounded-lg  text-white">
    <div className="w-full max-w-md px-4 ">
      <Field>
        <form action="" method="post">
      <Label className="text-sm/6 font-medium text-white">FirstName</Label>
      <input type='text' name='firstName' className='shadow-inner shadow-white mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white'
       onChange={handler}/><br/><p style={{color:"red"}}>{name}</p>
             <Label className="text-sm/6 font-medium text-white">LastName</Label>
             <input type='text'name='LastName' className='shadow-inner shadow-white  mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white'
             onChange={handler}/><br/><p style={{color:"red"}}>{lastname}</p>
         <Label className="text-sm/6 font-medium text-white">Password</Label>
        <input type='password'name='Password' className='shadow-inner shadow-white  mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white'
        onChange={handler}/><br/><p style={{color:"red"}}>{errpassword}</p>
        <Label className="text-sm/6 font-medium text-white">Email</Label>
        <input type='email'name='Mail' className='shadow-inner shadow-white   mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white'
        onChange={handler}/><br/><p style={{color:"red"}}>{erremail ||errserver}</p>

        <input type='button'value={"Submit"} className='hover:bg-red-600 text-white bg-red-700 h-9 w-full rounded-lg cursor-pointer' 
        onClick={submitHandler}/>

        </form>
     </Field>
    </div>
            </div>
         
<Outlet/>
    
    </>
}
export default Rgx ;