import React from "react";
import {  Button, ConfigProvider, Input } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { ReactComponent as Logo } from "../assets/pokemon-go.svg";
import { usePokemons } from "../store/pokemons";
import { Link, useNavigate } from "react-router-dom";


const { Search } = Input;


const Header = () => {
  const {setFindPokemon}= usePokemons()
  const navigate = useNavigate()

  
  return (
    <header className="fixed flex z-50 justify-between items-center left-1/2 -translate-y-1/2 -translate-x-1/2 top-12 border border-default-for-text border-opacity-30 rounded-lg bg-white p-4 w-[360px] sm:w-[500px]  md:w-[760px] xl:w-[1200px]">
      <Link to="/" className="flex items-center gap-4">
        <div className="h-10 w-14">
          <Logo className="h-full w-full" />
        </div>
        <h1 className="font-semibold text-xl hidden md:block">Pokémons</h1>
      </Link>

      <ConfigProvider
        theme={{
          token: {
            borderRadius: 4,
          },
        }}
      >
        <Search
            className="w-[200px] md:w-[360px] xl:w-[480px] ml-auto mr-2 md:mx-auto"
            size="large"
            allowClear
            placeholder="Я ищу..."
            onChange={(e)=>setFindPokemon(e.target.value)}
          />
      </ConfigProvider>
    
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#f74a5c",
              borderRadius: 4,
            },
          }}
        >
     
            <Button
              className="border border-default-for-text border-opacity-60 rounded"
              size="large"
              onClick={()=>navigate('/liked')}
              icon={<HeartOutlined />}
            />

        </ConfigProvider>
    </header>
  );
};

export default Header;
