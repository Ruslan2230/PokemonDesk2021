import React from 'react';

import PokemonCard from '../../components/PokemonCard';

import usePokemons from '../../hooks/usePokemons';
import { isEmpty } from '../../helpers';
import s from './Pokedex.module.scss';

const PokedexPage = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <div className={s.root}>Loading ...</div>;
  }

  if (isError) {
    return <div className={s.root}>Error ...</div>;
  }

  return (
    <div className={s.root}>
      <div>Total {data.total}</div>

      {!isEmpty(data) &&
        data.pokemons.map((item: any) => (
          <>
            <PokemonCard />
          </>
        ))}
    </div>
  );
};

export default PokedexPage;
