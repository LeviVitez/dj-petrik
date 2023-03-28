import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/Navbar-component';
import Register from './components/pages/Register';


function App() {
  return (
    <div className="App">
       <NavbarComponent></NavbarComponent>
      <main>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/garage' element={<Garage />} />
          <Route path='/aboutus' element={<AboutUs />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
