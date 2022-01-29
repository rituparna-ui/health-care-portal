import React from 'react'
import { NavLink,Link } from 'react-router-dom';
const Navbar = () =>{
    return (
        <>
        <nav class="navbar navbar-expand-md bg-light navbar-light ">
  
  <a class="navbar-brand" href="#">Navbar</a>

  
  <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse " id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <Link class="nav-link" to="/">Link</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/usersearch">Link</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/resources">medical Resources</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/LoginUi">Login</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/HospitalRegistration">Hospital Registration</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/UserRegistration">User Registration</Link>
      </li>
    </ul>
  </div>
</nav>
        </>
    )
}

export default Navbar;
