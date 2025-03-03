'use client';

import { createContext, useContext } from 'react';
import { usePortfolioData } from '@/hooks/usePortfolioData';

export const PortfolioContext = createContext();

export function Providers({ children }) {
    const { data: users, loading, error } = usePortfolioData();
    
    return (
        <PortfolioContext.Provider value={{ users, loading, error }}>
            {children}
        </PortfolioContext.Provider>
    );
}

export function usePortfolio() {
    return useContext(PortfolioContext);
} 