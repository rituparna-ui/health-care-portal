import axios from 'axios';
import React,{useState} from 'react'
import Navbar from './Navbar';
import { Navigate, useNavigate } from 'react-router-dom';
const UserRegistration = () =>{
 const navigate=useNavigate()
  const[formData,setFormData]=useState()
  const[signedUp,setSignedUp]=useState(false)
  const[error,setError]=useState('')
  
  const ChangeHandler=(event)=>{
     var{name,value}=event.target
     if('M'===value){
       value=1
     }else if('F'===value){
       value=0
     }
     setFormData({
       ...formData,
       [name]:value
     })
  }

  const clickHandler=async()=>{
    console.log(formData)
    const{name,email,contact,age,sex,password,confPassword}=formData
    axios.post("http://localhost:5000/api/v1/auth/signup",{
      name,email,contact,age,sex,password,confPassword
    }).then(res=>{
      console.log(res)
      setSignedUp(true)
     setSignedUp(true)
      
    }).catch(err=>{
      console.log(err)
      setError(err.response.data.errors)
    })
  }
 
    
    return (
        <>
      <Navbar/>
        <div className="container2"> <h1 class='pt-1 heading'> User Registration </h1>
        <hr style={{width:'20%',backgroundColor:' #F49F0A',borderWidth:'3px' }}></hr>
        </div>
       
       {
         signedUp?(
           <p style={{textAlign:'center'}}>Sign up successful, Please login <a href="/loginUi">here</a></p>
         ):(
          <section className="signup">
          <div className="container mt-5">
              <div className="signup-content">
             
                <div className="signup-form">
                {
              error.length==0?null:(
                error.map((key,value)=>(
                  <p style={{color:'red',fontSize:'12px',display:'block',marginLeft:'auto',marginRight:"auto",width:'60%',marginBottom:'-1px'}}><i class="zmdi zmdi-close-circle material-icons-name mr-2"></i>{key.msg}</p>
                ))
              )
            }
                    
                   <form className="register-form" id="register-form">
                       <div className="form-group">
                           <label htmlFor="name">
                           <i class="zmdi zmdi-account material-icons-name"></i>

                           </label>
                           <input onChange={ChangeHandler} type="text" name="name" id="name" autoComplete="off"
                             placeholder="Your Name"
                             />
                       </div>
                       <div className="form-group">
                           <label htmlFor="email">
                           <i class="zmdi zmdi-email material-icons-name"></i>

                           </label>
                           <input  onChange={ChangeHandler}  type="text" name="email" id="email" autoComplete="off"
                             placeholder="Your email"
                             />
                       </div>
                       <div className="form-group">
                           <label htmlFor="contact no">
                           <i class="zmdi zmdi-phone material-icons-name"></i>

                           </label>
                           <input  onChange={ChangeHandler}  type="text" name="contact" id="contact no." autoComplete="off"
                             placeholder="Your Contact Number"
                             />
                             </div>
                       <div className="form-group">
                           <label htmlFor="sex">
                           <i class="zmdi zmdi-male-female material-icons-name"></i>
                           </label>
                           <input  onChange={ChangeHandler}  type="text" name="sex" id="sex" autoComplete="off"
                             placeholder="sex (M/F)"
                             />

                       </div>
                       <div className="form-group">
                           <label htmlFor="age">
                           <i class="zmdi zmdi-circle material-icons-name"></i>
                           </label>
                           <input  onChange={ChangeHandler}  type="text" name="age" id="age" autoComplete="off"
                             placeholder="age"
                             />

                            </div>
                            
                       <div className="form-group">
                           <label htmlFor="password">
                           <i class="zmdi zmdi-circle material-icons-name"></i>

                           </label>
                           <input  onChange={ChangeHandler}  type="text" name="password" id="password" autoComplete="off"
                             placeholder="Your Password"
                             />
                       </div>
                       <div className="form-group">
                           <label htmlFor="Confirm Password">
                           <i class="zmdi zmdi-circle material-icons-name"></i>

                           </label>
                           <input  onChange={ChangeHandler}  type="text" name="confPassword" id="Confirm Password" autoComplete="off"
                             placeholder="Confirm Password"
                             />
                       </div>



                       <div className="form-group form-button">
                           
                        
                       <input
                type="button"
                name="signup"
                id="signup"
                className="form-submit "
                value="SUBMIT"
                onClick={clickHandler}
              />
                       </div>


                   </form>

                    </div>
                  </div>
          </div>
        
          </section>
         )
       }
        
        
            
        </>
    )
}

export default UserRegistration;