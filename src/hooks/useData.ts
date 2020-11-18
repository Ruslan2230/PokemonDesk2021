import { useEffect, useState } from 'react';

import req from '../utils/request';

const useData = (endpoint: string, query: object, deps: any[] = []) => {
  const [data, SetData] = useState({ total: 0, pokemons: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    try {
      const getPokemons = async () => {
        const response = await req(endpoint, query);
        SetData(response);
      };
      getPokemons();
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, deps);

  return { data, isLoading, isError };
};

export default useData;
