import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import {Route,Routes}from 'react-router-dom'
import Home from './components/Home';
import ListUsers from './components/ListUsers';
import './components/style.css';
import Profile from './components/Profile';
function App() {
  return (
    <div className="App">
      <h2 style={{color:"brown"}}> WorkShop API</h2>
      <NavBar/>
      <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path='/userList' element ={<ListUsers/>}/>
      <Route path="/profile/:userId" element = {<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
