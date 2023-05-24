import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {HYDRATE} from "next-redux-wrapper";
import {AppState, AppThunk} from "@/store/store";
import axios from "axios";


interface PokemonsState  {
    pokemons: Pokemon[];
    pokemonsCount: number;
};

const initialState: PokemonsState = {
    pokemons: [],
    pokemonsCount: 0
};
export const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        setPokemons: (state, action: PayloadAction<{pokemons: Pokemon[],pokemonsCount: number}>) => {
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
            state.pokemonsCount = action.payload.pokemons.pokemonsCount;
        },
    },

})
export const { setPokemons } = pokemonsSlice.actions

type Query = string | string[] | undefined
export const fetchPokemons =
    (offset: Query, limit:  Query): AppThunk =>
        async dispatch => {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)

            const pokemons =  response.data;
            dispatch(
                setPokemons({pokemons: pokemons.results, pokemonsCount: pokemons.count}),
            );
        };


export  const selectPokemons =  (state: AppState) => state.pokemons
export default pokemonsSlice.reducer