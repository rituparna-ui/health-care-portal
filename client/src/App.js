import './App.css';
import React from 'react';
import {Route, BrowserRouter,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Resources from './components/Resources';
import UserSearch from './components/UserSearch';
import Video from './components/VideoCall'
import JutsuCall from './components/JutsuCall';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
       <Routes>
       
       <Route path="/" exact element={<Home />} />
       <Route path="/usersearch" element={<UserSearch />} />
       <Route path="/resources" element={<Resources />} />
       <Route path="videoCall" element={<Video/>}/>
        
         
       </Routes>
    </BrowserRouter>
  );
}

export default App;
