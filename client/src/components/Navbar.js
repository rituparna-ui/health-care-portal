import React from 'react'
import { NavLink } from 'react-router-dom';
const Navbar = () =>{
    return (
        <>
        <nav class="navbar navbar-expand-md bg-light navbar-light float-right ">
  
  <a class="navbar-brand" href="#">Navbar</a>

  
  <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse " id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <NavLink class="nav-link" href="/">Link</NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" href="/usersearch">Link</NavLink>
      </li>
      <li class="nav-item">
        <NavLink href='/resources' class="nav-link" href="#">Link</NavLink>
      </li>
    </ul>
  </div>
</nav>
        </>
    )
}

export default Navbar;
