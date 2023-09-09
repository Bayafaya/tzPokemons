import React from 'react'
import { useLiked } from '../store/liked'
import Card from "../components/Card";
import { v4 as uuidv4 } from 'uuid';
function Liked() {
    const {likedPokemons} = useLiked()
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-5 gap-2 place-items-center relative">
    {likedPokemons.length 
    ? 
    likedPokemons.map((item) => <Card key={uuidv4()} liked={item} />)
    : 
      <div className="absolute">
       No liked Message
      </div>
    }
  </div>
  )
}

export default Liked