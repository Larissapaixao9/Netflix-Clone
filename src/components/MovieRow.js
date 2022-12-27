import React from 'react'
import styled from 'styled-components'

export default function MovieRow({ title, items }) {
  
  return (
    <MovieRowGlobalStyle>
      <h2>{ title }</h2>
      <MovieListArea>
        <MovieList>
        { items.results.length>0 && items.results.map((item, key)=>(
          <MovieItem>
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

`

const MovieList = styled.div`
  width: 6249999.9375rem;
`

const MovieItem = styled.div`

  display: inline-block;
  width: 9.375rem;

  img{
    width: 100%;
  }

`

const MovieRowGlobalStyle = styled.div`
  margin-bottom: 1.875rem;

  h2{
    margin: 0rem 0rem 0rem 1.875rem ;
  }
`