import React from 'react'
import Card from './Card';
import './cssofcards.css'
const Cards = (props) => {
  let data = props.data;
  return (
    <div className='cards-container'>
      {/* agar data mila then map function otherwise loading */}
      {data ? (
        data.map((pokemon, index) => (
          <Card key={index} pokemon={pokemon} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Cards
