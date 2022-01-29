import React from "react";
import Navbar from "./Navbar";
import {Link} from 'react-router-dom'
import healthcare from '../images/healthcare-image.png'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

import AssignmentIcon from '@material-ui/icons/Assignment';
import './HomePage.css'
const HomePage=()=>{
    return(
        <>
        <Navbar/>
        <div class='LandingContainer'>
            <div class='Text'>
                <h1>One Stop for all <br></br> your Medical needs</h1>
                <p>We allow patient to consult with the doctor regarding the medicines availability and prices of medicine nearby the patient, and discuss the total cost of the prescription with the doctor. ( So that doctor can suggest better alternative )..</p>
                <Link to='/pharmacy'>
                <button class='custBtn'>Find Pharmacy</button>
                </Link>
            </div>
            <div class='Image'>
                <img src={healthcare}></img>
            </div>
        </div>
        <div className="serviceContainer">
              <h1 className="heading">Our Services</h1>
              <hr style={{width:'20%',backgroundColor:' #F49F0A',borderWidth:'3px' }}></hr>
              <div className='cardContainer'>
                 <div className="card">
                     <div className="serviceIcon">
                         <LocalHospitalIcon size="large"></LocalHospitalIcon>
                     </div>
                     <h5 style={{fontSize:'18px',color:'#F49F0A'}} className="heading">service heading</h5>
                  <p>jdhfksjlsd
                      dslfjsldgkjs
                      sdfhlsjfpoewirpewi isuhfoiweuto
                      dskufhoewsjgpwi sefiho
                  </p>
                 </div>
                 <div className="card">
                 <div className="serviceIcon">
                     <AssignmentIcon></AssignmentIcon>
                 </div>
                 <h5 style={{fontSize:'18px',color:'#F49F0A'}} className="heading">service heading</h5>
                  <p>jdhfksjlsd
                      dslfjsldgkjs
                      sdfhlsjfpoewirpewi isuhfoiweuto
                      dskufhoewsjgpwi sefiho
                  </p>
                 </div>
                 <div className="card">
                 <div className="serviceIcon">
                     <NoteAddIcon></NoteAddIcon>
                 </div>
                 <h5 style={{fontSize:'18px',color:'#F49F0A'}} className="heading">service heading</h5>
                  <p>jdhfksjlsd
                      dslfjsldgkjs
                      sdfhlsjfpoewirpewi isuhfoiweuto
                      dskufhoewsjgpwi sefiho
                  </p>
                 </div>
              </div>
       
              
       
        </div>
        </>
    )
}

export default HomePage