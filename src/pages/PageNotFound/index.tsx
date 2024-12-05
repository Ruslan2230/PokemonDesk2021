import React from 'react';
import { navigate } from 'hookrouter';

import Button from '../../components/Button';
import teamRocketTrio from './assets/Team_Rocket_trio_OS 1.png';
import { linkEnum } from '../../routes';

import s from './PageNotFound.module.scss';

const PokedexPage = () => {
  return (
    <div className={s.root}>
      <div className={s.text}>404</div>
      <div className={s.layaut}>
        <div className={s.image}>
          <img src={teamRocketTrio} alt="Small PokeBall" />
        </div>
        <div className={s.sabTitle}>
          <span>The rocket team </span> has won this time.
        </div>

        <Button onClick={() => navigate(linkEnum.HOME)} color="#F2CB07">
          Return{' '}
        </Button>
      </div>
    </div>
  );
};

export default PokedexPage;
