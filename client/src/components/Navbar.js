import React from 'react'
import { NavLink,Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import {setGlobalState,useGlobalState} from './state';
const Navbar = () =>{
   const isloggedIn=useGlobalState("LoggedIn")[0]
   const userRole=useGlobalState("token")[0]['role']
   console.log(isloggedIn)
    return (
        <>
        <nav style={{backgroundColor:'white',fontSize:'13px'}} class="navbar navbar-expand-md  ">
  
  <Link style={{color:'black'}}class="nav-link" to="/">Home</Link>

  
  <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span style={{backgroundColor:"black"}} class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse " id="collapsibleNavbar">
    <ul class="navbar-nav" style={{justifyContent:'center',alignItems:'center'}}>
      <li class="nav-item">
        <Link style={{color:'black'}}class="nav-link" to="/symptoms">Treatment and Symptom Report</Link>
      </li>
      <li class="nav-item">
        <Link style={{color:'black'}} class="nav-link" to="/usersearch">Resource Inventory</Link>
      </li>
      <li class="nav-item">
        <Link style={{color:'black'}} class="nav-link" to="/chronic">Chronic Disease Detection</Link>
      </li>
      {
        userRole!=='USER' && isloggedIn ?<li class="nav-item">
        <Link style={{color:'black'}} class="nav-link" to="/resources">medical Resources</Link>
      </li>:null
      }
      
      {
        isloggedIn?<Link style={{color:'black'}} class="nav-link" to="/">Logout</Link>:<div >
          <li class="nav-item" class='afterLogin d-flex justify-content-center align-items-center flex-row'>
        <Link style={{color:'black'}} class="nav-link" to="/LoginUi">Login</Link>
        <div class="dropdown">
  <button style={{fontSize:'13px'}} class="btn dropdown-toggle nav-link" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
