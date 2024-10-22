import {  Field, Label } from '@headlessui/react'
import axios from 'axios';
import { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

 const Login =({logout, setLogout})=> {
 const  obj ={
  Password:"",
  Mail:""

  }
  console.log(logout);
  const navigate =useNavigate()
const [stata ,setStata]= useState(obj);
const [errpassword ,setErrpassword]=useState("");
const [erremail ,setErremail]=useState("");
const [errserver ,setErrserver]=useState("");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // تعبير عادي للتحقق من صحة البريد الإلكتروني
const passwordRegex = /^[A-Za-z0-9]{8,}$/;
const handler =(e)=>{
    setStata((old)=>{
      return{...old,[e.target.name]:e.target.value}
    })
}
const submitHandler =async()=>{
    setErrpassword("");
    setErremail("");
    setErrserver("");
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
    if(!vaild)return ;
try{
    const Data =await axios.post("http://localhost:3000/api/login",stata);
  navigate("/");
  setLogout(false);

}
  catch(error){
    setErrserver("invalid email or password");

  }
}
//console.log(stata);
  return (
  <>

   <h1 className='text-white text-2xl font-bold mx-7 my-9'> Login</h1>
    <div className="flex justify-center my-16 box-content shadow-white p-6 max-w-md mx-auto  bg-slate-950 border border-white rounded-lg  text-white">
    <div className="w-full max-w-md px-4 ">
      <Field>
        <form action="" method="post">
        <Label className="text-sm/6 font-medium text-white">Email</Label>

        <input type='email'name='Mail' className='shadow-inner shadow-white   mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white'
        onChange={handler}/><br/><p style={{color:'red'}}>{erremail||errserver}</p>
         <Label className="text-sm/6 font-medium text-white">Password</Label>
        <input type='password'name='Password' className='shadow-inner shadow-white  mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white'
        onChange={handler}/><br/><p style={{color:'red'}}>{errpassword||errserver}</p>
        
        
        <input type='button'value={"Submit"} className='hover:bg-red-600 text-white bg-red-700 h-9 w-full rounded-lg cursor-pointer' 
        onClick={submitHandler}/>
        </form>
     </Field>
     <NavLink to="/forget"> <p  className='text-blue-600 cursor-pointer'>forget my password !</p></NavLink>
     </div>
     <Outlet/>
    </div>
    </>
  )
  }
  export default Login ;