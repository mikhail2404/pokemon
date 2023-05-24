
import React from 'react';
import Link from "next/link";


const Header: React.FC = () => {
    return (
        <header className="h-10v bg-black  flex  items-center justify-center">
            <Link href="/">
                <h1 className="text-6xl  text-amber-400">Pokedex</h1>
            </Link>
        </header>
    );
};

export default Header;
