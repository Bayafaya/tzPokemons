import React from 'react'
import { usePokemons } from '../store/pokemons'

function GetMorePokemons() {
    const {pokemonsList,getNextPokemons} = usePokemons()
  return (
    <div className='font-semibold text-sm p-4 rounded border border-default-for-text border-opacity-30 text-end w-full'>
        <span>Pokemons count: {pokemonsList.length} </span>
        <button onClick={async()=> await getNextPokemons()} className='underline'>Get another 50 pokemons</button>
    </div>
  )
}

export default GetMorePokemons