import './App.css';
import React from 'react';
import {Route, BrowserRouter,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Resources from './components/Resources';
import UserSearch from './components/UserSearch';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
       <Routes>
       
       <Route path="/" element={<Home />} />
       <Route path="/usersearch" element={<UserSearch />} />
       <Route path="/resources" element={<Resources />} />
        
         
       </Routes>
    </BrowserRouter>
  );
}

export default App;
