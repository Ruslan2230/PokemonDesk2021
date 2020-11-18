import React, { useState } from 'react';

import usePokemons from '../../hooks/useData';
import { isEmpty } from '../../helpers';
import s from './Pokedex.module.scss';

const PokedexPage = () => {
  const [serchValue, setSerchValue] = useState('');
  const [query, setQuery] = useState({});
  // const query = useMemo(() => ({ name: serchValue }), [serchValue]);

  const { data, isLoading, isError } = usePokemons('getPokemons', query, [serchValue]);

  const handleSerchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSerchValue(e.target.value);
    setQuery((s) => ({
      ...s,
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
      <input type="text" value={serchValue} onChange={handleSerchChange} />
      <div>Total {data.total}</div>

      {!isEmpty(data) &&
        data.pokemons.map((item: any) => (
          <>
            <p>{item.name}</p>
          </>
        ))}
    </div>
  );
};

export default PokedexPage;
