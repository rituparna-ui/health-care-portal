import React from 'react'
import { NavLink,Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import {setGlobalState,useGlobalState} from './state';
const Navbar = () =>{
   const isloggedIn=useGlobalState("LoggedIn")[0]
    return (
        <>
        <nav style={{backgroundColor:'white'}} class="navbar navbar-expand-md  ">
  
  <Link style={{color:'black'}}class="nav-link" to="/">Navbar</Link>

  
  <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse " id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <Link style={{color:'black'}}class="nav-link" to="/symptoms">Link</Link>
      </li>
      <li class="nav-item">
        <Link style={{color:'black'}} class="nav-link" to="/usersearch">Link</Link>
      </li>
      <li class="nav-item">
        <Link style={{color:'black'}} class="nav-link" to="/chronic">chronic disease</Link>
      </li>
      <li class="nav-item">
        <Link style={{color:'black'}} class="nav-link" to="/resources">medical Resources</Link>
      </li>
      {
        isloggedIn?<Link style={{color:'black'}} class="nav-link" to="/resources">Logout</Link>:<div >
          <li class="nav-item" class='afterLogin d-flex justify-content-center align-items-center flex-row'>
        <Link style={{color:'black'}} class="nav-link" to="/LoginUi">Login</Link>
        <div class="dropdown">
  <button class="btn dropdown-toggle nav-link" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Register
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <Link class="nav-link" to="/UserRegistration">user Registration</Link>
  <Link class="nav-link" to="/Hospitalregistration">Hospital Registration</Link>
  </div>
</div>
      </li>
        </div>
      }

     
      
    </ul>
  </div>
</nav>
        </>
    )
}

export default Navbar;
