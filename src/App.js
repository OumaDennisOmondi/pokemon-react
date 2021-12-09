import React, { useState, useEffect } from "react";
import PokemonList from "./components/PokemonList";
import Pagination from "./components/Pagination";
import axios from "axios";
import loader from './assets/loader.svg'

function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
    let cancel 
    axios.get(currentPageUrl,{
      cancelToken: new axios.CancelToken( c => cancel = c)
    })
    .then( res => {
      console.log(res.data);
      let pokemons = res.data.results;
      setPokemon(pokemons.map(p => p.name));
      setIsLoading(false)
      setNextPageUrl(res.data.next);
      setPrevPageUrl(res.data.previous);
    })
    return () => cancel
  },[currentPageUrl])

  function goToNextPage(){
    setCurrentPageUrl(nextPageUrl)
    console.log(nextPageUrl)
  }
  function goToPrevPage(){
    setCurrentPageUrl(prevPageUrl)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokemon App</h1>
      </header>
      { isLoading ? <img src={loader} />:
      
       <><PokemonList pokemon={pokemon} />
       <Pagination
          goToNextPage={ nextPageUrl ? goToNextPage : null} 
          goToPrevPage={ prevPageUrl ? goToPrevPage : null}
         /></>
       }
    </div>
  );
}

export default App;
