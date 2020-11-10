import React from 'react';
import { A } from 'hookrouter';
import cn from 'classnames';

import Header from '../../components/header';
import Layaut from '../../components/Layout';
import Button from '../../components/Button';
import Parallax from '../../components/Parallax';

import s from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={cn(s.root)}>
      <Header />
      <Layaut className={s.contentWrap}>
        <div className={s.contentText}>
          <h1>
            <b>Find</b>all your favorite <b>Pokemon</b>
            <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
            <Button onClick={() => {}} color="#73D677">
              <A href="/pokedex">See pokemons</A>{' '}
            </Button>
          </h1>
        </div>
        <div className={s.contentParallax}>
          <Parallax />
        </div>
      </Layaut>
    </div>
  );
};

export default HomePage;
