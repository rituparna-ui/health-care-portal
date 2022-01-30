import './LoginUi.css';
import profile from "./../image/a.png";
import email from "./../image/email.jpg";
import pass from "./../image/pass.png";
import React,{useState} from 'react';
import axios from 'axios';
import {setGlobalState,useGlobalState} from './state';
import Navbar from './Navbar';

function LoginUi() {

  const[formData,setFormData]=useState()
  

  const changeHandler=(event)=>{
     const{name,value}=event.target

     setFormData({
       ...formData,
       [name]:value
     })
  }
  function clickHandler(){
    const{email,password}=formData
   
    axios.post("http://localhost:5000/api/v1/auth/login",{
        email,password
    }).then(res=>{
      console.log(res)
      setGlobalState("LoggedIn",true)
      setGlobalState("loggedInUser",email)
      
    }).catch(err=>{
      console.log(err)
    })
  }
  console.log(formData)
  console.log(useGlobalState('loggedInUser'))
  console.log(useGlobalState('LoggedIn'))
  return (
    <>
    <Navbar />
    <div className="main">
      
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h3>Login Page</h3>
           <div>
             <img src={email} alt="email" className="email"/>
             <input className='loginInput name' name='email' onChange={changeHandler} type="text" placeholder="email"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input className='loginInput name' name='password' onChange={changeHandler} type="password" placeholder="password" />
           </div>
          <div >
          <button className="login-button" onClick={clickHandler}>Login</button>
          </div>
           
            <p className="link">
              <a className='linklogin' href="#">Forgot password ?</a> Or<a className='linklogin' href="#">Sign Up</a>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
    </>
    
  );
}

export default LoginUi;