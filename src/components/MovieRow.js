import React from 'react'
import styled from 'styled-components'
import MovieContext from '../contexts/MovieContext'
import { useNavigate } from "react-router-dom";

export default function MovieRow({ title, items }) {
  const clickedMovieContext = React.useContext(MovieContext)
  const navigate = useNavigate()
  const { setMovieInfo } = clickedMovieContext

  function ifMovedCLicked(name){
    console.log(name)
    setMovieInfo(name)
    navigate('/clickedMovie')
  }

  return (
    <MovieRowGlobalStyle>
      <h2>{ title }</h2>
      <MovieListArea>
        <MovieList>
        { items.results.length>0 && items.results.map((item, key)=>(
          <MovieItem onClick={()=>ifMovedCLicked(item.name)}>
            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt='poster' key={key}/>
          </MovieItem>
        )) }
        </MovieList>
      </MovieListArea>
    </MovieRowGlobalStyle>
  )
}

const MovieListArea = styled.div`
  overflow-x: hidden;
  padding-left: 1.875rem;
`

const MovieList = styled.div`
  width: 6249999.9375rem;
`

const MovieItem = styled.div`

  display: inline-block;
  width: 9.375rem;
  cursor: pointer;

  img{
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.2s;

    :hover{
      transform: scale(1);
    }
  }

`

const MovieRowGlobalStyle = styled.div`
  margin-bottom: 1.875rem;

  h2{
    margin: 0rem 0rem 0rem 1.875rem ;
  }
`