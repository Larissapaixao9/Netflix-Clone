import React from 'react'
import TmdbRequests from '../TmdbRequests';
import MovieRow from './MovieRow';

export default function Page() {
    const [movieList,setMovieList] = React.useState([])

    React.useEffect(()=>{
        const loadEverything = async()=>{
          //getting the total list
          let list = await TmdbRequests()
          console.log(list)
          setMovieList(list)
        }
        loadEverything()
      }, [])

  return (
<div className="Page">
      <section className='lists'>
        { movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        )) }
      </section>
    </div>
  )
}
