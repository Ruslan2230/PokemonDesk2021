import React, { useState } from 'react';

import usePokemons from '../../hooks/useData';
import PokemonCard from '../../components/PokemonCard';
import { isEmpty } from '../../helpers';
import { IPokemons, PokemonsRequest } from '../../interface/Pokemons';
import s from './Pokedex.module.scss';

interface IQuery {
  name?: string;
}

const PokedexPage = () => {
  const [serchValue, setSerchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({});
  // const query = useMemo(() => ({ name: serchValue }), [serchValue]);

  const { data, isLoading, isError } = usePokemons<IPokemons>('getPokemons', query, [serchValue]);

  const handleSerchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSerchValue(e.target.value);

    setQuery((state: IQuery) => ({
      ...state,
      name: e.target.value,
    }));
  };

  if (isLoading) {
    return <div className={s.root}>Loading ...</div>;
  }

  if (isError) {
    return <div className={s.root}>Error ...</div>;
  }

  return (
    <div className={s.root}>
      <div className={s.total}>
        {data && data.total} <b>Pokemons</b> for you to choose your favorite{' '}
      </div>
      <input
        className={s.serchInput}
        placeholder="Encuentra to pokemons..."
        type="text"
        value={serchValue}
        onChange={handleSerchChange}
      />

      <div className={s.pokemonsGalary}>
        {!isEmpty(data) &&
          data &&
          data.pokemons.map((item: PokemonsRequest) => (
            <>
              // eslint-disable jsx-props-no-spreading
              <PokemonCard {...item} />
            </>
          ))}
      </div>
    </div>
  );
};

export default PokedexPage;
