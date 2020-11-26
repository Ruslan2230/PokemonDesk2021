import React from 'react';
import useData from '../../hooks/useData';
import { PokemonsRequest } from '../../interface/Pokemons';

export interface PokemonProps {
  id: string | number;
}

const Pokemon: React.FC<PokemonProps> = ({ id }) => {
  const { data, isLoading } = useData<PokemonsRequest>('getPokemon', { id });

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return <div>This pokemon id iqual {data?.name}</div>;
};

export default Pokemon;
