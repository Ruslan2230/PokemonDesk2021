import React from 'react';
import PokedexPage from '../Pokedex';

interface IEmptyPageProps {
  title?: String;
}

const EmptyPage: React.FC<IEmptyPageProps> = ({ title }) => {
  return (
    <div>
      Empty Page! {title}
      {title === 'Pokédex' ? <PokedexPage /> : ''}
    </div>
  );
};

export default EmptyPage;
