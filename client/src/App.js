 import './App.css';
import React from 'react';
import {Route, BrowserRouter,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Resources from './components/Resources';
import UserSearch from './components/UserSearch';
//import VideoCall from './components/VideoCall'
import AnimatedForm from './components/AnimatedForm.js';
import Home from './components/Home';
import LoginUi from './components/LoginUi';
import HospitalRegistration from './components/HospitalRegistration';
import UserRegistration from './components/UserRegistration';
import Symptom from './components/Symptom'
import HomePage from './components/HomePage'


function App() {
  return (
    <BrowserRouter>
     <Navbar/>
       <Routes>
      
       <Route path="/" exact element={<Home />} />
       <Route path="/home" exact element={<HomePage/>}/>
       <Route path="/usersearch" element={<UserSearch />} />
       <Route path="/resources" element={<Resources />} />
       
       <Route path="LoginUi" element={<LoginUi/>}/>
       <Route path="/HospitalRegistration" element={<HospitalRegistration />} /> 
       <Route path="/UserRegistration" element={<UserRegistration />} /> 
       
       <Route path="/form" element={<AnimatedForm/>}/>
       <Route path="/symptoms" element={<Symptom/>} />
        
         
       </Routes>
    </BrowserRouter>
  );
}

export default App;
