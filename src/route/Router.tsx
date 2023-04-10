import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { publicRouter } from './routes';

function Router() {
  return <RouterProvider router={publicRouter} />;
}

export default Router;
