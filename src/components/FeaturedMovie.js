import React from 'react'
import styled from 'styled-components'

export default function FeaturedMovie({ item }) {
    console.log(item)
    let date = new Date(item.first_air_date)
    let genres = []
    for(let i in item.genres){
        genres.push(item.genres[i].name)
    }
  return (
    <>
    <Section style={{ 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
        <FeaturedVertical>
            <FeaturedHorizontal>
                <FeaturedName>
                    {item.name}
                </FeaturedName>
                <FeaturedInfo style={{ background: 'transparent' }}>
                    <FeaturedPoints>
                        {item.vote_average} pontos
                    </FeaturedPoints>
                    <FeaturedYear>
                        { date.getFullYear() }
                    </FeaturedYear>
                    <FeaturedSeasons>
                        {item.number_of_seasons} temporada{item.number_of_seasons!==1 ? 's' : ''}
                    </FeaturedSeasons>
                    <FeaturedDescriptions>
                        {item.overview}
                    </FeaturedDescriptions>

                    <FeaturedButtons>
                        <a href=''> Assistir</a>
                        <a href=''> + Minha lista</a>
                    </FeaturedButtons>

                    <FeaturedGenres>
                        <strong>Gêneros: <strong>{ genres.join(', ') }</strong></strong>
                    </FeaturedGenres>
                </FeaturedInfo>
            </FeaturedHorizontal>
        </FeaturedVertical>
    </Section>
    </>
  )
}

const Section = styled.section`
    height: 100vh;
    position: relative;
`

const FeaturedVertical = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 10%, transparent 90%);
`

const FeaturedHorizontal = styled.div`

    width: inherit;
    height: inherit;
    background: linear-gradient(to right, #111 30%, transparent 70%);
`

const FeaturedName = styled.h3`
    font-size: 3.75rem;
    color: #FFF;
    background: transparent;
    background-color: transparent;

`

const FeaturedInfo = styled.div`
    color: #FFF;
    margin-top: 0.9375rem;
    position: absolute;
    background: transparent;
    background-color: transparent;
    font-weight: bold;
    font-size: 1.125rem;

`

const FeaturedPoints = styled.div`
    color: #46d369;
    display: inline-block;
    background-color: transparent;
    margin-right: 0.9375rem;
`

const FeaturedYear = styled.div`
    color: #FFF;
    background-color: transparent;
    display: inline-block;
    margin-right: 0.9375rem;
`

const FeaturedSeasons = styled.div`
    color: #FFF;
    background-color: transparent;
    display: inline-block;
    margin-right: 0.9375rem;
`

const FeaturedButtons = styled.div`
    color: #FFF;
    background-color: transparent;
    margin-top: 0.9375rem;

`


const FeaturedGenres = styled.div`
    color: #FFF;
    background-color: transparent;
`

const FeaturedDescriptions = styled.div`
    color: #FFF;
    background-color: transparent;
    margin-top: 0.9375rem;
    font-size: 1.25rem;
    color: #999;
    max-width: 40%;
`