import './App.css';
import Navbar from './components/Navbar';
import Resources from './components/Resources';
import UserSearch from './components/UserSearch';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Route exact path="">
        <Home/>

      </Route>
      <Route path='/usersearch'>
        <UserSearch></UserSearch>
      </Route>
      <Route path='/resources'>
         <Resources></Resources>
      </Route>
    </div>
  );
}

export default App;
