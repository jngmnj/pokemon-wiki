import { createSlice } from "@reduxjs/toolkit";
import { fetchPokemonList } from "./thunk";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemons: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemonList.fulfilled, (state, action) => {
        state.loading = false;
        state.pokemons = action.payload;
      })
      .addCase(fetchPokemonList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
