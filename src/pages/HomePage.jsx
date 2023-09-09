import React, { useEffect, useMemo, useState } from "react";
import Card from "../components/Card";
import { usePokemons } from "../store/pokemons";
import SectionsTitle from "../Ui/SectionsTitle";
import { v4 as uuidv4 } from "uuid";
import GetMorePokemons from "../Ui/GetMorePokemons";
import { ConfigProvider, Select } from "antd";
function HomePage() {
  const { findPokemon, getPokemonsList, pokemonsList } = usePokemons();
  const [sortType, setSortType] = useState("Default");

  const handleChange = (value) => {
    setSortType(value);
  };

  useEffect(() => {
    getPokemonsList();
  }, []);

  const sortedList = useMemo(() => {
    if (sortType === "name") {
      return pokemonsList.toSorted((a, b) => a.name > b.name);
    } else {
      return pokemonsList;
    }
  }, [sortType, pokemonsList]);

  const sortedAndSearchList = useMemo(() => {
    return sortedList.filter((item) =>
      item.name.toLowerCase().includes(findPokemon.toLowerCase())
    );
  }, [sortedList, findPokemon]);

  return (
    <>
      <SectionsTitle>List of pokemons</SectionsTitle>

      <div className="flex  items-center justify-center sm:justify-end">
        <ConfigProvider
          theme={{
            token: {
              borderRadius: "4px",
              colorBorder: "rgba(0, 0, 0, 0.30)",
            },
          }}
        >
          <Select
            style={{ width: 200 }}
            defaultValue={sortType}
            onChange={handleChange}
            options={[
              { value: "Default ", label: "Default" },
              { value: "name", label: "Name" },
            ]}
          />
        </ConfigProvider>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-5 gap-2 place-items-center relative">
        {sortedAndSearchList.length 
        ? 
          sortedAndSearchList.map((item) => <Card key={uuidv4()} data={item} />)
        : 
          <div className="absolute">
            There is no such Pokemon from uploaded please try get more
          </div>
        }
      </div>
      {sortedAndSearchList.length ? <GetMorePokemons /> : null}
    </>
  );
}

export default HomePage;
