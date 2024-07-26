import React, { createContext, useEffect, useState } from 'react';
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingSeries, setTrendingSeries] = useState([]);
  return (
    <AppContext.Provider
      value={{
        trendingMovies,
        setTrendingMovies,
        trendingSeries,
        setTrendingSeries,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
