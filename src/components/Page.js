import React from 'react'
import TmdbRequests from '../TmdbRequests';
import MovieRow from './MovieRow';
import FeaturedMovie from './FeaturedMovie';
import { getMovieInfo } from '../TmdbRequests';
export default function Page() {
    
    const [movieList,setMovieList] = React.useState([])
    const [featureData, setFeatureData] = React.useState(null)

    React.useEffect(()=>{
        const loadEverything = async()=>{
          //getting the total list
          let list = await TmdbRequests()
          console.log(list)
          setMovieList(list)

          //getting Featured:
           let originals = list.filter((item, index)=>item.slug==='originals');

           let randomChosen = Math.floor(Math.random()*(originals[0].items.results.length-1))

           let chosenMovie = originals[0].items.results[randomChosen];

           let chosenInfo = await getMovieInfo(chosenMovie.id, 'tv')

           console.log(chosenInfo)

           setFeatureData(chosenInfo)
        }
        loadEverything()
      }, [])

  return (
<div className="Page">
        { featureData && <FeaturedMovie item={featureData}/>}
      <section className='lists'>
        { movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        )) }
      </section>
    </div>
  )
}
