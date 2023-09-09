import axios from "axios";
import { create } from "zustand";
import { createJSONStorage, persist } from 'zustand/middleware'
import { API } from "../api/main";

export const useLiked = create(persist((set, get) => ({
  likedPokemons: [],
  setLikePokemon:(value)=>{
    const filtred = get().likedPokemons.filter(item=>item.id !== value.id)
    set((state) => ({ likedPokemons: [...filtred,value] }))
},
setDeleteLiked:(id)=>{
    const filtred = get().likedPokemons.filter(item=>item.id !== id)
    set((state) => ({ likedPokemons: [...filtred] }))
},


}),
{
  name: 'liked', 
  storage: createJSONStorage(() => localStorage), 
}));
