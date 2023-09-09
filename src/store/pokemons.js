import axios from "axios";
import { create } from "zustand";
import { API } from "../api/main";

export const usePokemons = create((set, get) => ({
  loading: false,
  pokemonsList: [],
  findPokemon: '',
  offset: 0,
  getPokemonsList: async () => {
    try {
      set((state) => ({ loading: true }));
      const response = await axios.get(
        `${API}pokemon?limit=50&offset=${get().offset}`
      );
      set((state) => ({ pokemonsList: response.data.results }));
    } catch (e) {
      console.log(e);
    } finally {
      set((state) => ({ loading: false }));
    }
  },
  getNextPokemons: async () => {
    try {
      set((state) => ({ loading: true, offset: state.offset + 50 }));
      const response = await axios.get(
        `${API}pokemon?limit=50&offset=${get().offset}`
      );
      set((state) => ({
        pokemonsList: [...state.pokemonsList, ...response.data.results],
      }));
    } catch (e) {
      console.log(e);
    } finally {
      set((state) => ({ loading: false }));
    }
  },
  setFindPokemon:(value)=>{(set((state) => ({ findPokemon: value })))}

}));
