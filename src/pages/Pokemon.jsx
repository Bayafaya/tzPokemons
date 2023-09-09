import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../api/main";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
function Pokemon() {
  const { name } = useParams();
  const [pokemon, setsPokemon] = useState(null);
  const [isLoading, setsIsLoading] = useState(false);

  const getPokemon = async () => {
    try {
      setsIsLoading(true);
      const response = await axios.get(`${API}pokemon/${name}`);
      setsPokemon(response.data);
    } catch (e) {
      console.log(e);
    } finally {
      setsIsLoading(false);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <>
      {pokemon ? (
        <div className="border border-default-for-text border-opacity-30 rounded-lg bg-white p-4 space-y-6">
          <div className="flex gap-3 flex-col md:flex-row items-center md:items-start">
            <img
              src={pokemon.sprites.front_default}
              className="w-full sm:w-[300px] md:h-[260px] border border-default-for-text border-opacity-30 rounded-sm"
              alt={pokemon.name}
            />
            <ul className="space-y-2 w-full">
              <li className="text-xl">
                <span className="text-secondary-for-text">Name:</span>{" "}
                {pokemon.name.toUpperCase()}
              </li>
              <li className="text-xl">
                <span className="text-secondary-for-text">Weight:</span>{" "}
                {pokemon.weight}
              </li>
              <li className="text-xl">
                <span className="text-secondary-for-text">Height:</span>{" "}
                {pokemon.height}
              </li>
              <li className="text-xl">
                <span className="text-secondary-for-text">Experience:</span>{" "}
                {pokemon.base_experience}
              </li>
              <div className="flex gap-3">
                <span className="text-secondary-for-text text-xl">Types:</span>
                <ul className="list-disc list-inside">
                  {pokemon.types.map((item) => (
                    <li key={uuidv4()} className="text-xl">{item.type.name}</li>
                  ))}
                </ul>
              </div>
            </ul>
          </div>
       
          <div className="space-y-1">
          <span className="text-secondary-for-text text-2xl">Statistics:</span>
            <ul className="flex flex-col justify-between">
              {pokemon.stats.map((item) => (
                <li key={uuidv4()} className="text-xl font-medium">
                  <span className="text-secondary-for-text text-base">
                    {item.stat.name}:
                  </span>
                  <span> {item.base_stat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div>...</div>
      )}
    </>
  );
}

export default Pokemon;
