import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MovieClicked from './components/MovieClicked';
import Page from './components/Page';
import MovieContext from './contexts/MovieContext';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp'

function App() {

  const [movieInfo, setMovieInfo] = React.useState()

  return (
    <MovieContext.Provider value={{ movieInfo, setMovieInfo }}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Page />}/>
        <Route path='/clickedMovie' element={<MovieClicked />}/>
        <Route path='/sign-in' element={ <SignIn /> }/>
        <Route path='/sign-up' element={ <SignUp /> }/>
      </Routes>
    </BrowserRouter>
    </ MovieContext.Provider>
  );
}

export default App;
