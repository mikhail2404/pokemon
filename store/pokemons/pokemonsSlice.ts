import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {HYDRATE} from "next-redux-wrapper";
import {AppState} from "@/store/store";

export interface pokemonState {
    pokemons: string[]
}

const initialState: pokemonState = {
    pokemons: [],
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPokemons: (state, action: PayloadAction<string[]>) => {
            state.pokemons  = action.payload
        },

    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            if(!action.payload.pokemon.pokemons){
                return state
            }
            state.pokemons = action.payload.pokemon.pokemons
        }
    }
})

// Action creators are generated for each case reducer function
export const { setPokemons } = pokemonSlice.actions
export  const selectPokemons =  (state: AppState) => state.pokemon
export default pokemonSlice.reducer