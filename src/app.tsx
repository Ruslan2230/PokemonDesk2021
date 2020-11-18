import React from 'react';
import { useRoutes } from 'hookrouter';

import PageNotFound from './pages/PageNotFound';

import routes from './routes';
import Header from './components/header';

const App = () => {
  const match = useRoutes(routes);
  return match ? (
    <>
      <Header />
      {match}
    </>
  ) : (
    <PageNotFound />
  );
};

export default App;
