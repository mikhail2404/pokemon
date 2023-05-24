interface Pokemon{
  name: string;
    url: string;
}
interface PokemonPage {
    results: Pokemon[],
    next: string | null,
    previous: string | null,
    count: number;
}

interface PokemonDetails {
    name: string,
    types: {
        type: {
            name: string,
        }
    }[],
    weight: number,
    height: number,
    sprites: {
        other: {
            "official-artwork": {
                front_default: string,
            }
        }
    }
}