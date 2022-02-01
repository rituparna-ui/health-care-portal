import React,{useEffect,useState} from 'react';
import Navbar from './Navbar';
import './resource.css'
import axios from 'axios';
import atob from 'atob'
import {setGlobalState,useGlobalState} from './state';


const Resources = () => {
  const token= useGlobalState('token')[0]
  const jwtToken=useGlobalState('jwtToken')[0]
  const loggedIn=useGlobalState('LoggedIn')[0]
  const[checkUser,setCheckUser]=useState()
  const[formdata,setFormdata]=useState()
  const[message,setMessage]=useState('')
  
  const authAxios=axios.create({
    headers:{
      Authorization:`Bearer ${jwtToken}`,
    },
  })
  useEffect(()=>{
    console.log(token['role'])
    console.log(loggedIn)
    const role=token['role']
    if(role==='USER'){
       setCheckUser(false)
    }else{
      setCheckUser(true)
    }

  },[])

  const handleChange=(event)=>{
    const{name,value}=event.target
    setFormdata({
      ...formdata,
      [name]:value
    })

  }
  console.log(
    token
  );
  const handleClick = () => {
    
    const { general,icu,oxy,ventilator} = formdata;
    

    authAxios.post('http://localhost:5000/api/v1/hospitals/resources', {
      general,icu,oxy,ventilator,
      
     
    }).then(res=>{
      setMessage(res.data.message)
    }).catch(err=>{
     
    })
  };
  console.log(jwtToken)
  return (
    <>
     {
       checkUser && loggedIn ?(
        <div>
        <Navbar/>

<div className="container2 ">
 
 <h1 class="pt-4 heading"> RESOURCE DATABASE</h1>
 <hr style={{width:'30%',backgroundColor:' #F49F0A',borderWidth:'3px' }}></hr>
</div>

<section className="signup">
  
 <div className="container mt-2">
   <div className="signup-content">
    {
      message?<h5 style={{color:'green',textAlign:'center'}}><i class="zmdi zmdi-check-circle material-icons-name mr-2"></i>resources updated</h5>:null
    }
   
   
     <div className="signup-form">
    
       <form className="register-form" id="register-form">
        
        
         <div className="form-group ">
           <label htmlFor="medical equipment">
             <i class="zmdi zmdi-hospital material-icons-name"></i>
           </label>
         
           
           <input
             onChange={handleChange}
             type="text"
             name="general"
             id="Quantity"
             autoComplete="off"
             placeholder="no. of general ward beds"
           />
          
         </div>
         <div className="form-group ">
           <label htmlFor="medical equipment">
             <i class="zmdi zmdi-hospital material-icons-name"></i>
           </label>
         
           
           <input
            onChange={handleChange}
             type="text"
             name="icu"
             id="Quantity"
             autoComplete="off"
             placeholder="no. of ICU beds"
           />
          
         </div>
         <div className="form-group ">
           <label htmlFor="medical equipment">
             <i class="zmdi zmdi-hospital material-icons-name"></i>
           </label>
         
           
           <input
            onChange={handleChange}
             type="text"
             name="oxy"
             id="Quantity"
             autoComplete="off"
             placeholder="no. of ventilators"
           />
          
         </div>
         <div className="form-group ">
           <label htmlFor="medical equipment">
             <i class="zmdi zmdi-hospital material-icons-name"></i>
           </label>
         
           
           <input
            onChange={handleChange}
             type="text"
             name="ventilator"
             id="Quantity"
             autoComplete="off"
             placeholder="no. of oxygen cylinders"
           />
          
         </div>
     
         

         <div className="form-group form-button">
           <input
             type="button"
             name="signup"
             id="signup"
             className="form-submit "
             value="SUBMIT"
             onClick={handleClick}
           />
         </div>
       </form>
     </div>
   </div>
 </div>
</section>
      </div>
       ):<h4>You are not authorised to visit this page</h4>
     }
      
    </>
  );
};

export default Resources;
