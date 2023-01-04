import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MovieContext from '../contexts/MovieContext'
import styled from 'styled-components'


export default function MovieClicked() {
  const clickedMovieContext = React.useContext(MovieContext)

  const { movieInfo } = clickedMovieContext

    console.log(movieInfo)
  return (
    <div>{movieInfo}</div>
  )
}



const GeneralStyle = styled.div`
  background-color: #111;
  color: #FFF;
  align-items: center;
`