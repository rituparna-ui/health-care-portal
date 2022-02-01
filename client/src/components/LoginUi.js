import './LoginUi.css';
import profile from "./../image/a.png";
import email from "./../image/email.jpg";
import pass from "./../image/pass.png";
import React,{useState} from 'react';
import axios from 'axios';
import {setGlobalState,useGlobalState} from './state';
import Navbar from './Navbar';
import {useNavigate} from "react-router-dom"
import atob from 'atob'

function LoginUi() {
  const history=useNavigate()
  const[formData,setFormData]=useState()
  const[error,setError]=useState('')
  

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
      console.log(res.data.token)
      const role =JSON.parse(atob(res.data.token.split(".")[1]))
      setGlobalState("jwtToken",res.data.token)
      setGlobalState("token",role)
      setGlobalState("LoggedIn",true)
      setGlobalState("loggedInUser",email)
      history('/')
    }).catch(err=>{
      console.log(err.response.data.message)
      setError(err.response.data.message)
    })
  }
  console.log(formData)
  console.log(useGlobalState('loggedInUser'))
  console.log(useGlobalState('token'))
  return (
    <>
    <Navbar />
    <div className="main">
    {
      error?<p style={{color:'red'}}><i class="zmdi zmdi-close-circle material-icons-name mr-2"></i>{error}</p>:null
    }
    
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