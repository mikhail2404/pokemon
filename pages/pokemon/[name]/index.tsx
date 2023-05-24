import React from 'react';
import {GetServerSideProps} from "next";
import Image from "next/image";
import { Stack} from "@mui/material";
import axios from "axios";

interface PokemonProps {
    pokemon: PokemonDetails;
}

const Pokemon: React.FC<PokemonProps> = ({pokemon}) => {
    console.log({pokemon})
    return (
        <Stack className="items-center	 justify-center">
            <Image
                src={pokemon.sprites.other["official-artwork"].front_default}
                alt={"Pokemon: " + pokemon.name}
                width={400}
                height={400}
            />
            <p>
                <span className="font-bold mr-2">Weight:</span> {pokemon.weight}
            </p>
            <p>
                <span className="font-bold mr-2">Height:</span>
                {pokemon.height}
            </p>
            <h2 className="text-2xl mt-6 mb-2">Types</h2>
            {pokemon.types.map((type, index) => (
                <p key={index}>{type.type.name}</p>
            ))}
        </Stack>
    );
};


export const getServerSideProps: GetServerSideProps = async ({ query }) => {
        const { name } = query;
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const pokemon = response.data;

        return {
            props: {
                pokemon,
            },
        };
};
export default Pokemon;
