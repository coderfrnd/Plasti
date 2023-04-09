import './App.css';
import React from 'react';
import {BrowserRouter as Router ,Routes,  Route} from 'react-router-dom'
import Navbar from './Component/Navbar';
import Home from './Component/Pages/home';
import Services from './Component/Pages/Services';
import Products from './Component/Pages/Products';
import SignUp from './Component/Pages/SignUp';

function App() {
  return (
    <>
    <Router>
    <Navbar/>

    <Routes>
      <Route path = '/' exact element = {<Home/>} />
      <Route path='/services' element = {<Services/>} />
      <Route path='/products' element = {<Products/>} />
      <Route path='/sign-up' element = {<SignUp/>} />


    </Routes>
      </Router>
    </>
  );
}

export default App;
