import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import Header from '../../components/header';
import Layaut from '../../components/Layout';
import Button from '../../components/Button';
import Parallax from '../../components/Parallax';
import Heading from '../../components/Heading';

import s from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={cn(s.root)}>
      <Header />
      <Layaut className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading variant="h1">
            {' '}
            <h1>test h1 </h1>
          </Heading>
          <Heading variant="h4">
            {' '}
            <h4>test h4 </h4>
          </Heading>
          <h1>
            <b>Find</b>all your favorite <b>Pokemon</b>
            <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
            <Button onClick={() => {}}>
              {' '}
              <Link to="/pokedex">See pokemons</Link>{' '}
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
