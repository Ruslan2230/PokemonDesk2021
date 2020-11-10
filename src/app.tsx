import React from 'react';
import { useRoutes } from 'hookrouter';

import PageNotFound from './pages/PageNotFound';

import routes from './routes';

const App = () => {
  const match = useRoutes(routes);
  return match || <PageNotFound />;
};

export default App;
