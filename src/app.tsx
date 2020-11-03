import React from 'react';
import cn from 'classnames';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import s from './App.module.scss';

const App = () => {
  return (
    <div className={s.container}>
      <Header />
      <div className={cn(s.content)}>This is App component !</div>
      <Footer />
    </div>
  );
};

export default App;
