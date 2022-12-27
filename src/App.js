import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MovieClicked from './components/MovieClicked';
import Page from './components/Page';
import MovieContext from './contexts/MovieContext';

function App() {

  const [movieInfo, setMovieInfo] = React.useState()


  return (
    <MovieContext.Provider value={{ movieInfo, setMovieInfo }}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Page />}/>
        <Route path='/clickedMovie' element={<MovieClicked />}/>
      </Routes>
    </BrowserRouter>
    </ MovieContext.Provider>
  );
}

export default App;
