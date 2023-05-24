import React  from 'react';
import {GridRowsProp, GridColDef, GridEventListener} from '@mui/x-data-grid';
import Image from "next/image";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import {selectPokemons} from "@/store/pokemons/pokemonsSlice";
import {StyledDataGrid} from "@/components/StyledDataGrid";



const columns: GridColDef[] = [
    { field: 'name', headerName: 'name', flex: 1},
    { field: 'image', headerName: 'image', renderCell: (params) => <Image src={params.value} alt={params.row.name}  width={100} height={100}/>, sortable: false, flex: 1 },
    { field: 'id', headerName: 'id', flex: 1},
];


const PokemonGrid: React.FC = () => {
    const {pokemons, pokemonsCount}  = useSelector(selectPokemons)
    const router = useRouter();
    const {offset, limit} = router.query

    const initialPage  =  (limit && offset) ? Math.floor(+offset / +limit)  - 1: 0

    const rows: GridRowsProp = pokemons.map((pokemon: Pokemon, index: number) => {
        const poIndexCalculation =  offset && limit ? +offset - +limit + index: index
        const pokeIndex = ('000' +  (poIndexCalculation + 1)).slice(-3)
        return {id: `#${pokeIndex}`, name: pokemon.name, image: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`}
    })

    const paginationModelChangeHandler = (page: number, pageSize: number) => {
        router.push({pathname: router.pathname, query: {offset: (page + 1) * pageSize, limit: pageSize}})
    }
    const handleRowClick: GridEventListener<'rowClick'> = (params) => {
        router.push(`/pokemon/${params.row.name}`)
    }
    return (
            <StyledDataGrid   rowHeight={120}  initialState={{pagination: { paginationModel: {page: initialPage, pageSize: limit ? +limit : 20} }}} paginationMode="server"   onRowClick={handleRowClick} rowCount={pokemonsCount} rows={rows} columns={columns} pageSizeOptions={[20, 50, 100]}  onPaginationModelChange={({page, pageSize}) => paginationModelChangeHandler(page, pageSize) }/>
    );
};

export default PokemonGrid;
