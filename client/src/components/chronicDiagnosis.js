import React from "react";
import {Link} from "react-router-dom"
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

import AssignmentIcon from '@material-ui/icons/Assignment';
import Navbar from "./Navbar";

const ChronicDiagnosis=()=>{
    return(
        <>
        <Navbar/>
        <div className="serviceContainer" style={{marginTop:'0'}}>
              <h1 className="heading">Chronic disease Prediction</h1>
              <hr style={{width:'20%',backgroundColor:' #F49F0A',borderWidth:'3px' }}></hr>
              <div className='cardContainer'>
                 <div className="card">
                     <div className="serviceIcon">
                         <LocalHospitalIcon size="large"></LocalHospitalIcon>
                     </div>
                     <h5 style={{fontSize:'18px',color:'#F49F0A'}} className="heading">
                     <Link style={{color:'#F49F0A'}}  to="/diabetes">Diabetes Prediction</Link>
                         </h5>
                  <p>
                      This feature predicts the risks of you having diabetes after you have answered a few simple questions regarding your lifestyle upto an accuracy of 97 percent.
                  </p>
                 </div>
                 <div className="card">
                 <div className="serviceIcon">
                     <AssignmentIcon></AssignmentIcon>
                 </div>
                 <h5 style={{fontSize:'18px',color:'#F49F0A'}} className="heading">
                 <Link style={{color:'#F49F0A'}} to="/pcos">PCOS Prediction</Link></h5>
                  <p> This feature gives results of over 97 percentage accuracy on the risks of you having PCOS after you have answered a few simple questions regarding your lifestyle upto an accuracy of 97 percent.
                  </p>
                 </div>
                 <div className="card">
                 <div className="serviceIcon">
                     <NoteAddIcon></NoteAddIcon>
                 </div>
                 <h5 style={{fontSize:'18px',color:'#F49F0A'}} className="heading">
                 <Link style={{color:'#F49F0A'}} to="/depression">Clinical Depression Prediction</Link></h5>
                  <p>This feature provides results on your risks of having clinical depression after you have answered a few simple questions regarding your lifestyle upto an accuracy of 97 percent.
                  </p>
                 </div>
              </div>
       
              
       
        </div>
        </>
    )
}

export default ChronicDiagnosis