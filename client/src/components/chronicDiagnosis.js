import React from "react";
import {Link} from "react-router-dom"
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

import AssignmentIcon from '@material-ui/icons/Assignment';

const ChronicDiagnosis=()=>{
    return(
        <>
        <div className="serviceContainer" style={{marginTop:'0'}}>
              <h1 className="heading">Chronic disease Prediction</h1>
              <hr style={{width:'20%',backgroundColor:' #F49F0A',borderWidth:'3px' }}></hr>
              <div className='cardContainer'>
                 <div className="card">
                     <div className="serviceIcon">
                         <LocalHospitalIcon size="large"></LocalHospitalIcon>
                     </div>
                     <h5 style={{fontSize:'18px',color:'#F49F0A'}} className="heading">
                     <Link  to="/diabetes">Diabetes Predcition</Link>
                         </h5>
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
                 <h5 style={{fontSize:'18px',color:'#F49F0A'}} className="heading">
                 <Link  to="/pcos">PCOS Predcition</Link></h5>
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
                 <h5 style={{fontSize:'18px',color:'#F49F0A'}} className="heading">
                 <Link  to="/depression">Depression Predcition</Link></h5>
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

export default ChronicDiagnosis