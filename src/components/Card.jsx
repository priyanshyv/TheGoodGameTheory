import React, { useEffect,useState } from 'react'
import './cssofcards.css'

const Card = ({pokemon}) => {
    console.log("Card pokemon: ", pokemon);
    const [pokemonData, setPokemonData] = useState(null);

    async function fetchData() {
      try {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        setPokemonData(data);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    }
  
    useEffect(() => {
      fetchData();
    }, [pokemon.url]);
  
    if (!pokemonData) {
      return <p>Loading...</p>;
    }
  
    const { name, sprites } = pokemonData;
  return (
    //for find its image haaaash it take around 30 min to find image in api
    //so or finding image we again need to fetch it

      
    <div className="card">
      <p className=' text-black '>{pokemon.name}</p>
      <a href={pokemon.url}>extra detail</a>
      <img src={sprites.front_default} alt="pokemon img" />
    </div>
  )
}

export default Card
