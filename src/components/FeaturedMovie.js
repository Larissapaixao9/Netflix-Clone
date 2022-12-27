import React from 'react'
import styled from 'styled-components'

export default function FeaturedMovie({ item }) {
  return (
    <Section style={{ 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
        <FeaturedVertical></FeaturedVertical>
    </Section>
  )
}

const Section = styled.section`
    height: 100vh;
`

const FeaturedVertical = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111, transparent);
`