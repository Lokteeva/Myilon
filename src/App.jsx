import React from 'react';
import './css/App.css';
import { Header } from './components';
import { Home, Cart, NotFound } from './pages';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/cart" element={<Cart />} exact />
          <Route path="/notfound" element={<NotFound />} exact />
        </Routes>
      </div>
    </div>
  );
}

export default App;
