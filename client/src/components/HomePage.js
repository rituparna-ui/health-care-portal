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
                <p> This web application is a step towards providing a one stop platform for better virtual healthcare in a hassle-free manner and eliminates any stigma associated with conventional treatment.
Our aim is to provide relevant information about diseases and treatments and expanding physician’s ability to care for patients in a quick and accurate manner.
</p>
                <Link to='/pharmacy'>
                <button class='custBtn'>Explore</button>
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
                     <h5 style={{fontSize:'18px',color:'#F49F0A'}} className="heading">Summarised Report of Symptoms and Treatment</h5>
                  <p> To receive a summarised report of your problem and possible treatment after answering a few questions based on the symptoms,use this feature. This report can be extremely helpful to the doctors as they will be aware of patient’s condition and can diagnose accordingly.
                  </p>
                 </div>
                 <div className="card">
                 <div className="serviceIcon">
                     <AssignmentIcon></AssignmentIcon>
                 </div>
                 <h5 style={{fontSize:'18px',color:'#F49F0A'}} className="heading">Multiple Quick Diagnosis</h5>
                  <p>In India we have a huge population with chronic conditions like diabetes, blood pressure, cancer, heart disease etc. Hence this facility will help patients to quickly monitor and diagnose their conditions which do not require direct consultation from doctors and can be managed at home.
                  </p>
                 </div>
                 <div className="card">
                 <div className="serviceIcon">
                     <NoteAddIcon></NoteAddIcon>
                 </div>
                 <h5 style={{fontSize:'18px',color:'#F49F0A'}} className="heading">Portal for Exchange of Medical Resources </h5>
                  <p>This section on the website can be used to fetch or share  accurate information about emergency medical needs like oxygen cylinder, blood, bed availability and medicines.
                  </p>
                 </div>
              </div>
       
              
       
        </div>
        </>
    )
}

export default HomePage