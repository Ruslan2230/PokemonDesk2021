import React from 'react';
import { A } from 'hookrouter';
import cn from 'classnames';

import Layaut from '../../components/Layout';
import Button from '../../components/Button';
import Parallax from '../../components/Parallax';

import { linkEnum } from '../../routes';
import s from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={cn(s.root)}>
      <Layaut className={s.contentWrap}>
        <div className={s.contentText}>
          <h1>
            <b>Find</b>all your favorite <b>Pokemon</b>
            <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
            <A href={linkEnum.POKEDEX}>
              <Button onClick={() => {}} color="#73D677">
                {' '}
                See pokemons{' '}
              </Button>
            </A>
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
