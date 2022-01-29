import './App.css';
import React from 'react';
import {Route, BrowserRouter,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Resources from './components/Resources';
import UserSearch from './components/UserSearch';
//import VideoCall from './components/VideoCall'
import AnimatedForm from './components/AnimatedForm.js';
import Home from './components/Home';
import Symptom from './components/Symptom'
import HomePage from './components/HomePage'
import PCOSPrediction from './components/PCOSprediction';
import DepressionForm from './components/DepressionForm';
import ChronicDiagnosis from './components/chronicDiagnosis';


function App() {
  return (
    <BrowserRouter>
     <Navbar/>
       <Routes>
      
       <Route path="/" exact element={<Home />} />
       <Route path="/home" exact element={<HomePage/>}/>
       <Route path="/usersearch" element={<UserSearch />} />
       <Route path="/resources" element={<Resources />} />
       
       <Route path="/diabetes" element={<AnimatedForm/>}/>
       <Route path="/symptoms" element={<Symptom/>} />
       <Route path="/pcos" element={<PCOSPrediction/>} />
       <Route path="/depression" element={<DepressionForm/>} />
       <Route path="/chronic" element={<ChronicDiagnosis/>} />
       
         
       </Routes>
    </BrowserRouter>
  );
}

export default App;
