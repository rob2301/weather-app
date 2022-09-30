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
        <Route path="/budapest" element={<Place />} />
        <Route path="/szeged" element={<Place />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
