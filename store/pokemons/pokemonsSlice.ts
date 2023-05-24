import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {HYDRATE} from "next-redux-wrapper";
import {AppState, AppThunk} from "@/store/store";


type PokemonsState = {
    pokemons: Pokemon[];
    currentPokemon: PokemonDetails | null;
    pokemonsCount: number;
};

const initialState: PokemonsState = {
    pokemons: [],
    currentPokemon: null,
    pokemonsCount: 0
};
export const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        setPokemons: (state, action: PayloadAction<{pokemons: Pokemon[],pokemonsCount: number}>) => {
           console.log('setPokemons', state.pokemons)
            state.pokemons = action.payload.pokemons;
            state.pokemonsCount = action.payload.pokemonsCount
        },

    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            if (!action.payload.pokemons.pokemons  || !action.payload.pokemons.pokemonsCount) {
                return state;
            }

            state.pokemons = action.payload.pokemons.pokemons
            // state.currentPokemon = action.payload.pokemons.currentPokemon;
            state.pokemonsCount = action.payload.pokemons.pokemonsCount;
        },
    },

})
export const { setPokemons } = pokemonsSlice.actions

export const fetchPokemons =
    (offset: string | string[] | undefined, limit:  string | string[] | undefined): AppThunk =>
        async dispatch => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)

            const pokemons = await response.json();
            console.log({pokemons})
            dispatch(
                setPokemons({pokemons: pokemons.results, pokemonsCount: pokemons.count}),
            );
        };


export  const selectPokemons =  (state: AppState) => state.pokemons
export default pokemonsSlice.reducer