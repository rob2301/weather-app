import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Place from './components/place';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/budapest" element={<Place lat={47.5} lon={19.04} />} />
        <Route path="/debrecen" element={<Place lat={47.53} lon={21.62} />} />
        <Route path="/szeged" element={<Place lat={46.25} lon={20.14} />} />
        <Route path="/miskolc" element={<Place lat={48.1} lon={20.79} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
