import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import s from './Header.module.scss';
import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg';

interface IMENU {
  id: number;
  value: string;
  link: string;
  to: string;
}

const MENU: IMENU[] = [
  {
    id: 1,
    value: 'Home',
    link: '#',
    to: '/',
  },
  {
    id: 2,
    value: 'Pokédex',
    link: '#',
    to: '/pokedex',
  },
  {
    id: 3,
    value: 'Legendaries',
    link: '#',
    to: '/legendaries',
  },
  {
    id: 4,
    value: 'Documentation',
    link: '#',
    to: '/documentation',
  },
];

const Header = () => {
  return (
    <div className={cn(s.root)}>
      <div className={s.wrap}>
        <div className={s.pokemonLogo}>
          <PokemonLogoSvg />
        </div>
        <div className={s.menuWrap}>
          {MENU.map(({ id, value, link, to }) => (
            <Link to={to} key={id} href={link} className={s.menuLink}>
              {value}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
