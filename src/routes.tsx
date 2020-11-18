import React from 'react';
import EmptyPage from './pages/EmptyPage';
import Pokedex from './pages/Pokedex';
import HomePage from './pages/Home';

export enum linkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDERIES = '/legendaries',
  DOCUMENTATION = '/documentation',
}

interface IGeneralMenu {
  title: string;
  link: string;
  component: () => JSX.Element;
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

interface IAccMenu {
  [n: string]: () => JSX.Element;
}

const routes = GENERAL_MENU.reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
