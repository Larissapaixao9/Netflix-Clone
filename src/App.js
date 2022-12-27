import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TmdbRequests from './TmdbRequests';
import MovieRow from './components/MovieRow';
import MovieClicked from './components/MovieClicked';
import Page from './components/Page';
function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Page />}/>
        <Route path='/clickedMovie' element={<MovieClicked />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
