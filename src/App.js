import './App.css';
import { useEffect, useState } from 'react';
import TmdbRequests from './TmdbRequests';
import MovieRow from './components/MovieRow';

function App() {

  const [movieList,setMovieList] = useState([])

  useEffect(()=>{
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
  );
}

export default App;
