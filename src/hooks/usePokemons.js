import { useEffect, useState } from 'react';

const usePokemons = () => {
  const [data, SetData] = useState({ total: 0, pokemons: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    try {
      const getPokemons = async () => {
        const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons');
        const datas = await response.json();
        SetData(datas);
      };
      getPokemons();
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { data, isLoading, isError };
};

export default usePokemons;
