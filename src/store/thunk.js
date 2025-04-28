import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPokemonList = createAsyncThunk(
  "pokemon/fetchList",
  async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/?limit=1008&offset=0`
      );
      return response.data.results;
    } catch (error) {
      return console.error("Error fetching Pokemon data:", error);
    }
  }
);
