import React, { createContext, useState, useContext } from 'react';


const SearchContext = createContext(undefined);

export const SearchProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  return (
    <SearchContext.Provider value={{ isLoading, error, result, setIsLoading, setError, setResult }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearchContext must be used within a SearchProvider');
  }
  return context;
};