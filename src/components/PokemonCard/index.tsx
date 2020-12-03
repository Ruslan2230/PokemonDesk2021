import React from 'react';
import Heading from '../Heading';

import s from './PokemonCard.module.scss';
import { PokemonsRequest } from '../../interface/Pokemons';

const PokemonCard = (props: PokemonsRequest) => {
  const { name, img, types, stats } = props;
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading size="xs" variant="1" className={s.titleName}>
          {name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.defense}</div>
            Defense
          </div>
        </div>
        {types.map((item: string) => (
          <div className={s.labelWrap}>
            <span className={s.label}>{item}</span>
          </div>
        ))}
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
