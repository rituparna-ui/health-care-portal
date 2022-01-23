import React from 'react'
import Navbar from './Navbar';

const Resources = () =>{
    return (
        <>
        <Navbar/>
        <div className="container2 mt-5"> <h1 class='pt-5'>      RESOURCE DATABASE</h1>
        </div>
       
        
        <section className="signup">
              <div className="container mt-5">
                  <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">REGISTRATION-RESOURCES</h2>
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
                               <label htmlFor="medical equipment">
                               <i class="zmdi zmdi-hospital material-icons-name"></i>
                               </label>
                               <input type="text" name="medical equipment" id="medical equipment" autoComplete="off"
                                 placeholder="Medical Equipment"
                                 />

                            

                              <label htmlFor="Quantity">
                               <i class="zmdi zmdi-circle material-icons-name"></i>
                               </label>
                               <input type="text" name="Quantity" id="Quantity" autoComplete="off"
                                 placeholder="Quantity"
                                 />

                           </div>
                           <div className="form-group">
                               <label htmlFor="city">
                               <i class="zmdi zmdi-pin drop material-icons-name"></i>

                               </label>
                               <input type="text" name="city" id="city" autoComplete="off"
                                 placeholder="Your City"
                                 />
                           </div>
                           <div className="form-group">
                               <label htmlFor="locality">
                               <i class="zmdi zmdi-pin drop material-icons-name"></i>

                               </label>
                               <input type="text" name="locality" id="locality" autoComplete="off"
                                 placeholder="Your Locality"
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

export default Resources;
