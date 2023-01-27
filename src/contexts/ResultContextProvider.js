import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search72.p.rapidapi.com/'

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('JsMastery');

    const getResults = async (type) => {
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}` , {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'd2fc4463c5mshc1967100fef01e4p1f76c8jsn5d9528f75b25',
                'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
              }
        });

        const data = await response.json();

        console.log(data);

        setResults(data);
        setIsLoading(false);

    }

    return (
        <ResultContext.Provider value ={{getResults, results, searchTerm , setSearchTerm, isLoading}}>
            {children}
        </ResultContext.Provider>
    );
};

export const useResultContext = () => useContext(ResultContext);