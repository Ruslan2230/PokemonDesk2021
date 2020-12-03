import React, { PropsWithChildren } from 'react';
import EmptyPage from './pages/EmptyPage';
import Pokedex from './pages/Pokedex';
import HomePage from './pages/Home';
import Pokemon, { PokemonProps } from './pages/Pokemon';

interface IGeneralMenu {
  title: string;
  link: string;
  component: (props: PropsWithChildren<any>) => JSX.Element;
}

export enum linkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDERIES = '/legendaries',
  DOCUMENTATION = '/documentation',
  POKEMON = '/pokedex/:id',
}

export const GENERAL_MENU: IGeneralMenu[] = [
  {
    title: 'Home',
    link: linkEnum.HOME,
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    link: linkEnum.POKEDEX,
    component: () => <Pokedex />,
  },
  {
    title: 'Legendaries',
    link: linkEnum.LEGENDERIES,
    component: () => <EmptyPage title="Legendaries" />,
  },
  {
    title: 'Documentation',
    link: linkEnum.DOCUMENTATION,
    component: () => <EmptyPage title="Documentation" />,
  },
];

const SECOND_ROUTES: IGeneralMenu[] = [
  {
    title: 'Pokenon',
    link: linkEnum.POKEMON,
    component: ({ id }: PokemonProps) => <Pokemon id={id} />,
  },
];

interface IAccMenu {
  [n: string]: (props: PropsWithChildren<any>) => JSX.Element;
}

const routes = [...GENERAL_MENU, ...SECOND_ROUTES].reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
