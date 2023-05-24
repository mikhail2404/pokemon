
import { wrapper} from "@/store/store";
import {fetchPokemons} from "@/store/pokemons/pokemonsSlice";
import PokemonGrid from "@/components/PokemonGrid";


function Pokemons() {
    return (
        <PokemonGrid />
    )
}


export const getServerSideProps = wrapper.getServerSideProps(store => async ({query}) => {
    const {offset, limit} = query
    await store.dispatch(fetchPokemons(offset, limit))
    return {
        props: {

        }
    }
})



export default Pokemons;