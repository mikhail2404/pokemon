
import React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";


const Header: React.FC = () => {
    const {query: {name}} = useRouter()
    return (
        <header className="h-10v bg-black  flex  items-center justify-center">
            <Link href="/">
                <h1 className="text-6xl  text-amber-400 capitalize">{name ? name : 'Pokedex'}</h1>
            </Link>
        </header>
    );
};

export default Header;
