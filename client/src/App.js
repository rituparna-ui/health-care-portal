 import './App.css';
import React from 'react';
import {Route, BrowserRouter,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Resources from './components/Resources';
import UserSearch from './components/UserSearch';
import VideoCall from './components/VideoCall'
import Home from './components/Home';
import LoginUi from './components/LoginUi';
import HospitalRegistration from './components/HospitalRegistration';
import UserRegistration from './components/UserRegistration';
function App() {
  return (
    <BrowserRouter>
       <Routes>
       
       <Route path="/" exact element={<Home />} />
       <Route path="/usersearch" element={<UserSearch />} />
       <Route path="/resources" element={<Resources />} />
       <Route path="videoCall" element={<VideoCall/>}/>
       <Route path="LoginUi" element={<LoginUi/>}/>
       <Route path="/HospitalRegistration" element={<HospitalRegistration />} /> 
       <Route path="/UserRegistration" element={<UserRegistration />} /> 
       </Routes>
    </BrowserRouter>
  );
}

export default App;
