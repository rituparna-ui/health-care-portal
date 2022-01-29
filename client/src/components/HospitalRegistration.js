import React from 'react'
import Navbar from './Navbar';

const HospitalRegistration = () =>{
    
    return (
        <>
        <Navbar/>
        <div  className="container2 mt-5">
           <h1 class='heading pt-2'>Hospital Registration</h1>
           <hr style={{width:'30%',backgroundColor:' #F49F0A',borderWidth:'3px' }}></hr>
        </div>
       
        
        <section className="signup">
              <div className="container mt-5">
                  <div className="signup-content">
                    <div className="signup-form">
                        
                       <form className="register-form" id="register-form">
                           <div className="form-group">
                               <label htmlFor="name">
                               <i class="zmdi zmdi-account material-icons-name"></i>

                               </label>
                               <input type="text" name="name" id="name" autoComplete="off"
                                 placeholder="Hospital Name"
                                 />
                           </div>
                           <div className="form-group">
                               <label htmlFor="email">
                               <i class="zmdi zmdi-email material-icons-name"></i>

                               </label>
                               <input type="text" name="email" id="email" autoComplete="off"
                                 placeholder="Email"
                                 />
                           </div>
                           <div className="form-group">
                               <label htmlFor="contact no.">
                               <i class="zmdi zmdi-phone material-icons-name"></i>

                               </label>
                               <input type="text" name="contact no." id="contact no." autoComplete="off"
                                 placeholder="Contact Number"
                                 />
                           </div>
                           <div className="form-group">
                               <label htmlFor="city">
                               <i class="zmdi zmdi-pin drop material-icons-name"></i>
                               </label>
                               <input type="text" name="city" id="city" autoComplete="off"
                                 placeholder="City"
                                 />

                            

                           </div>
                           <div className='form-group'>
                             

                           <label htmlFor="State">
                               <i class="zmdi zmdi-pin drop-icons-name"></i>
                               </label>
                               <input type="text" name="State" id="State" autoComplete="off"
                                 placeholder="State"
                                 />
                           </div>
                           <div className="form-group">
                               <label htmlFor="password">
                               <i class="zmdi zmdi-circle material-icons-name"></i>

                               </label>
                               <input type="text" name="password" id="password" autoComplete="off"
                                 placeholder="Your Password"
                                 />
                           </div>
                           <div className="form-group">
                               <label htmlFor="Confirm Password">
                               <i class="zmdi zmdi-circle material-icons-name"></i>

                               </label>
                               <input type="text" name="Confirm Password" id="Confirm Password" autoComplete="off"
                                 placeholder="Confirm Password"
                                 />
                           </div>

                           <div className="form-group form-button">
                               
                            
                               <input type="submit" name="signup" id="signup" className="form-submit"
                                 value="SUBMIT"
                                 />
                           </div>


                       </form>
                        </div>
                      </div>
              </div>
              </section>
        </>
    )
}

export default HospitalRegistration;