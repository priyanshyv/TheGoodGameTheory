import React, { useEffect, useState } from 'react'
import { api } from '../data';
import Cards from './Cards';
import Card from './Card';
const TheGoodGameTheory = () => {
  const [data,setData] = useState(null);
  const [pokemonName, setPokemonName] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null);


  async function fetchData(){
    try{
      const res = await fetch(api);
      const output = await res.json();
      setData(output.results);
    }
    catch(error){
      //error aara hai while fetching the data
      console.log("error occur while fetching the data")
    }

  }
  //we use this while fetching the data
  useEffect(()=>{
    fetchData();
  },[]);
  useEffect(() => {
    console.log(data);
  }, [data]);




  // for handling the single pokemon
  const handleSearch = async () => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const data = await res.json();
      setSelectedPokemon(data);
    } catch (error) {
      console.error('Error fetching Pokemon data:', error);
      setSelectedPokemon(null);
    }
  };
  return (
    <div className=' bg-slate-500'>
      <div>
        <form>
        <input type="text" placeholder='enter pokemon name' onChange={(e) => setPokemonName(e.target.value)}/>
      <button onClick={handleSearch}>fetch</button>
        </form>
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {/* {
          loading ? ('loading...') : (<Cards data={data}></Cards> )
        } */}
        {selectedPokemon ? (
          <Card pokemon={selectedPokemon} />
        ) : (
          <Cards data={data} />
        )}  
      </div>
    </div>
  )
}

export default TheGoodGameTheory

