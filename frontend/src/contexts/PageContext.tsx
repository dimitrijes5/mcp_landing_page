import { Page, NavbarProps } from "@/types";
import { createContext, useContext, useState } from "react";

interface PageContextType {
    page: Page|null;
    setPage: (page: Page) => void;
    setNavbar: (navbar: NavbarProps) => void;
}

const PageContext = createContext<PageContextType|undefined>(undefined);

export const usePage = () => {
    const context = useContext(PageContext);
    if (!context) {
        throw new Error('usePage must be used within a PageProvider');
    }
    return context;
}

export const PageProvider = ({ children }: { children: React.ReactNode }) => {
    const [page, setPage] = useState<Page|null>(null);

    const setNavbar = (navbar: NavbarProps) => {
        setPage({
            ...page,
            navbar: navbar
        });
    }

    return <PageContext.Provider value={{ page, setPage, setNavbar }}>{children}</PageContext.Provider>;
};

