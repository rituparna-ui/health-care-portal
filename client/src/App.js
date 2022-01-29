 import './App.css';
import React from 'react';
import {Route, BrowserRouter,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Resources from './components/Resources';
import UserSearch from './components/UserSearch';
//import VideoCall from './components/VideoCall'
import Diabetes from './components/Diabetes.js';
import Home from './components/Home';
import LoginUi from './components/LoginUi';
import HospitalRegistration from './components/HospitalRegistration';
import UserRegistration from './components/UserRegistration';
import Symptom from './components/Symptom'
import HomePage from './components/HomePage'
import PCOSPrediction from './components/PCOSprediction';
import DepressionForm from './components/DepressionForm';
import ChronicDiagnosis from './components/chronicDiagnosis';


function App() {
  return (
    <BrowserRouter>
     
       <Routes>
      
       <Route path="/" exact element={<HomePage />} />
       <Route path="/home" exact element={<HomePage/>}/>
       <Route path="/usersearch" element={<UserSearch />} />
       <Route path="/resources" element={<Resources />} />
       
       <Route path="/diabetes" element={<Diabetes/>}/>
       <Route path="LoginUi" element={<LoginUi/>}/>
       <Route path="/HospitalRegistration" element={<HospitalRegistration />} /> 
       <Route path="/UserRegistration" element={<UserRegistration />} /> 
       
      
       <Route path="/symptoms" element={<Symptom/>} />
       <Route path="/pcos" element={<PCOSPrediction/>} />
       <Route path="/depression" element={<DepressionForm/>} />
       <Route path="/chronic" element={<ChronicDiagnosis/>} />
       
         
       </Routes>
    </BrowserRouter>
  );
}

export default App;
