import { createBrowserRouter, Navigate } from 'react-router-dom';

import {
  ROUTE_TO_COMMON_EMPLOYEE_BASE_PAGE,
  ROUTE_TO_CALENDAR,
  ROUTE_TO_CARD,
  ROUTE_TO_DATA_BASE,
  ROUTE_TO_DIAGRAMM,
  ROUTE_TO_INFO,
  ROUTE_TO_SETTINGS,
} from './constants';
import CommonEmployeeBasePageContainer from '../containers/CommonEmployeeBasePageContainer';
import AnotherPage from '../pages/AnotherPage';

export const publicRouter = createBrowserRouter([
  {
    path: ROUTE_TO_COMMON_EMPLOYEE_BASE_PAGE,
    element: <CommonEmployeeBasePageContainer />,
  },
  {
    path: ROUTE_TO_SETTINGS,
    element: <AnotherPage />,
  },
  {
    path: ROUTE_TO_INFO,
    element: <AnotherPage />,
  },
  {
    path: ROUTE_TO_DIAGRAMM,
    element: <AnotherPage />,
  },
  {
    path: ROUTE_TO_DATA_BASE,
    element: <AnotherPage />,
  },
  {
    path: ROUTE_TO_CARD,
    element: <AnotherPage />,
  },
  {
    path: ROUTE_TO_CALENDAR,
    element: <AnotherPage />,
  },
  {
    path: '*',
    element: <Navigate to={ROUTE_TO_COMMON_EMPLOYEE_BASE_PAGE} />,
  },
]);
