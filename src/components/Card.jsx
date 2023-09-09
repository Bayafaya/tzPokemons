import React, { useEffect, useState } from "react";
import { HeartOutlined,} from "@ant-design/icons";
import { Button, ConfigProvider, Avatar, Skeleton } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { useLiked } from "../store/liked";


const Card = ({ data, liked = null }) => {
  const [pokemon, setsPokemon] = useState(null);
  const [isLoading, setsIsLoading] = useState(false);
  const {setLikePokemon,setDeleteLiked} = useLiked()
  const navigate = useNavigate()

  const getPokemon = async () => {
    try {
      setsIsLoading(true)
      const response = await axios.get(`${data.url}`);
      setsPokemon(response.data);
      }
    catch (e) {
        console.log(e);
    }
    finally{
      setsIsLoading(false)
    }
    
  };

  const likePokemon = (e) =>{
    e.stopPropagation()
    if(liked){
      setDeleteLiked(pokemon.id)
    }
    else{
      setLikePokemon(pokemon)
    }
  }


  useEffect(() => {  
    if(liked !== null){
      setsPokemon(liked)
    }else{
      getPokemon();
    } 
  }, []);

  return (
    <>
      {!isLoading && pokemon ? (
        <article
          onClick={()=>navigate(`/pokemon/${pokemon.name}`)}
          className="bg-white border cursor-pointer border-default-for-text border-opacity-30 rounded-lg p-4 w-[228px] h-[378px] space-y-3 transition-all  ease-in-out hover:scale-[1.03]  hover:shadow-lg hover:border-opacity-40"
        >
          <div className="w-full h-[160px]">
            <img
              src={pokemon.sprites.front_default}
              alt="product img"
              className="h-full w-full rounded object-cover"
            />
          </div>

          <div className="space-y-1">
            <a className="w-full flex items-center justify-between gap-2">
          
              <h6 className="text-base truncate w-full font-medium">
               Name: {pokemon.name ? pokemon.name.toUpperCase()  : "Pokemon name"}
              </h6>
            </a>

            <h2 className="w-full line-clamp-3  text-sm min-h-[48px]">
              Abilities:
              <ul className="list-disc list-inside">
              {pokemon.abilities.map(item=><li key={uuidv4()}  className="text-xs">{item.ability.name}</li>)}
              </ul>
           
            </h2>
          </div>

          <div className="flex justify-between items-center gap-2">
            <h4 className="font-semibold text-sm w-full line-clamp-1">
              {pokemon.base_experience} experience
            </h4>
            <div className="flex mr-2">

              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: "#f74a5c",
                    borderRadius: 4,
                  },
                }}
              >
                <Button
                  className="grid place-items-center border-default-for-text border-opacity-30"
                  icon={<HeartOutlined />}
                  onClick={(e)=>likePokemon(e)}
                />
              </ConfigProvider>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-secondary-for-text text-end">
            weight: {pokemon.weight}
            </span>
         
              <ConfigProvider
                theme={{
                  token: {
                    borderRadius: 4,
                  },
                }}
              >
                <Button
                  type="text"
                  className="px-4 font-medium underline"
                  onClick={()=>navigate(`/pokemon/${pokemon.id}`)}
                >
                  More
                </Button>
              </ConfigProvider>
           
          </div>
        </article>
      ) : (
        <article className="bg-white border cursor-pointer border-default-for-text border-opacity-30 rounded-lg p-4 w-[228px] h-[378px] space-y-3">
          <Skeleton.Image style={{width:'194px', height:'160px'}} active className="rounded" />
          <div className="space-y-2">
            <a className="w-full flex items-center justify-between gap-2">
              <Skeleton.Input active block size={'small'}/>
            </a>
            <Skeleton.Input active  style={{width:'194px',height:'98px'}} />
            <Skeleton.Input active  style={{width:'194px',height:'30px'}} />
          </div>
        </article>
      )}
    </>
  );
};

export default Card;
