import React from 'react';
import Header from '../../components/header';
import PokedexPage from '../Pokedex';

interface IEmptyPageProps {
  title?: String;
}

const EmptyPage: React.FC<IEmptyPageProps> = ({ title }) => {
  return (
    <div>
      <Header />
      Empty Page! {title}
      {title === 'Pokédex' ? <PokedexPage /> : ''}
    </div>
  );
};

export default EmptyPage;
