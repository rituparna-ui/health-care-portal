import React from 'react'
import Navbar from './Navbar';

const UserRegistration = () =>{
    
    return (
        <>
        <Navbar/>
        <div className="container2 mt-5"> <h1 class='pt-5'>REGISTRATION</h1>
        </div>
       
        
        <section className="signup">
              <div className="container mt-5">
                  <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">USER REGISTRATION</h2>
                       <form className="register-form" id="register-form">
                           <div className="form-group">
                               <label htmlFor="name">
                               <i class="zmdi zmdi-account material-icons-name"></i>

                               </label>
                               <input type="text" name="name" id="name" autoComplete="off"
                                 placeholder="Your Name"
                                 />
                           </div>
                           <div className="form-group">
                               <label htmlFor="email">
                               <i class="zmdi zmdi-email material-icons-name"></i>

                               </label>
                               <input type="text" name="email" id="email" autoComplete="off"
                                 placeholder="Your email"
                                 />
                           </div>
                           <div className="form-group">
                               <label htmlFor="contact no.">
                               <i class="zmdi zmdi-phone material-icons-name"></i>

                               </label>
                               <input type="text" name="contact no." id="contact no." autoComplete="off"
                                 placeholder="Your Contact Number"
                                 />
                                 </div>
                           <div className="form-group">
                               <label htmlFor="sex">
                               <i class="zmdi zmdi-male-female material-icons-name"></i>
                               </label>
                               <input type="text" name="sex" id="sex" autoComplete="off"
                                 placeholder="sex (M/F)"
                                 />

                           </div>
                           <div className="form-group">
                               <label htmlFor="age">
                               <i class="zmdi zmdi-circle material-icons-name"></i>
                               </label>
                               <input type="text" name="age" id="age" autoComplete="off"
                                 placeholder="age"
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

export default UserRegistration;