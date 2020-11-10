import React, { useEffect, useState } from 'react';

import s from './Parallax.module.scss';

import SmallPokeBallPng from './assets/PokeBall1.png';
import CloudPng from './assets/Cloud1.png';
import CloudBigPng from './assets/Cloud2.png';
import PokeBallPng from './assets/PokeBall2.png';
import PikachuPng from './assets/Pikachu.png';

const Parallax = () => {
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setClientX(event.clientX);
      setClientY(event.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [clientX, clientY]);

  return (
    <div className={s.root}>
      <div
        className={s.smallPokeBall}
        style={{
          transform: `translate(${clientY * 0.05}px, ${clientX * 0.05}px)`,
        }}>
        <img src={SmallPokeBallPng} alt="Small PokeBall" />
      </div>
      <div
        className={s.cloud}
        style={{
          transform: `translate(${clientY * 0.04}px, ${clientX * 0.04}px)`,
        }}>
        <img src={CloudPng} alt="Cloud PokeBall" />
      </div>
      <div
        className={s.cloudBig}
        style={{
          transform: `translate(${clientY * 0.03}px, ${clientX * 0.03}px)`,
        }}>
        <img src={CloudBigPng} alt="Cloud Big PokeBall" />
      </div>

      <div
        className={s.pokeBall}
        style={{
          transform: `translate(${clientY * 0.02}px, ${clientX * 0.02}px)`,
        }}>
        <img src={PokeBallPng} alt="Big PokeBall" />
      </div>
      <div
        className={s.pikachu}
        style={{
          transform: `translate(${clientY * 0.01}px, ${clientX * 0.01}px)`,
        }}>
        <img src={PikachuPng} alt="Cloud PokeBall" />
      </div>
    </div>
  );
};

export default Parallax;
