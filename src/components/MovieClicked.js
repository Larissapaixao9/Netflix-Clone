import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MovieContext from '../contexts/MovieContext'


export default function MovieClicked() {
  const clickedMovieContext = React.useContext(MovieContext)

  const { movieInfo } = clickedMovieContext

    console.log(movieInfo)
  return (
    <div>{movieInfo}</div>
  )
}
