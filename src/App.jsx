import React from 'react';
import './css/App.css';
import { Header } from './components';
import {Home, Cart} from './pages';
import { Route, Routes } from 'react-router-dom';

function App() {  

  fetch('https://64eb3e98e51e1e82c57722ed.mockapi.io/pizzas').then(res => {
    return res.json();
  }) .then((arr)=>{
    console.log(arr);
  });

  return (
    <div className="wrapper">
      <Header /> 
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} exact/>
          <Route path="/cart" element={<Cart/>} exact/>
          
        </Routes>
      </div>
    </div>
  );
}

export default App;
