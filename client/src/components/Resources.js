import React,{useEffect} from 'react';
import Navbar from './Navbar';
import './resource.css'
import axios from 'axios';

import {setGlobalState,useGlobalState} from './state';
const Resources = () => {
  const LoggedinUser= useGlobalState('loggedInUser')[0]
  console.log()
  useEffect(()=>{
      const url="http://localhost:5000/api/v1/auth/checkUserRole/"
       axios.get(url,{params:{
             user:'priyu'
       }}).then(res=>{
         console.log(res)
       }).catch(err=>{
         console.log(err)
       })
  },[])

  const handleClick = () => {
    const form = document.getElementById('register-form');
    const { name, email, contact, equip, qty, city, locality } = form;
    console.log(
      name.value,
      email.value,
      contact.value,
      equip.value,
      qty.value,
      city.value,
      locality.value
    );

    axios.post('http://localhost:5000/api/v1/hospitals', {
      name: name.value,
      email: email.value,
      contact: contact.value,
      equip: equip.value,
      qty: qty.value,
      city: city.value,
      locality: locality.value,
    });
  };
  console.log(useGlobalState('LoggedIn'))
  return (
    <>
      <Navbar/>

      <div className="container2 ">
        
        <h1 class="pt-4 heading"> RESOURCE DATABASE</h1>
        <hr style={{width:'30%',backgroundColor:' #F49F0A',borderWidth:'3px' }}></hr>
      </div>

      <section className="signup">
        <div className="container mt-2">
          <div className="signup-content">
            <div className="signup-form">
              
              <form className="register-form" id="register-form">
               
               
                <div className="form-group ">
                  <label htmlFor="medical equipment">
                    <i class="zmdi zmdi-hospital material-icons-name"></i>
                  </label>
                
                  
                  <input
                   
                    type="text"
                    name="qty"
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
                   
                    type="text"
                    name="qty"
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
                   
                    type="text"
                    name="qty"
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
                   
                    type="text"
                    name="qty"
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
    </>
  );
};

export default Resources;
