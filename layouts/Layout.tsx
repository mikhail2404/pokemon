import React, {ReactNode} from 'react';
import Header from "@/components/Header";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <>
            <Header />
            <main className="h-90v p-10">
                {children}
            </main>
        </>
    );
};

export default Layout;
