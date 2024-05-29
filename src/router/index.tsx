import { createBrowserRouter } from 'react-router-dom';
import { RouterConfig } from '@/constants/routes';
import { Layout, Unauthorized, NotFound } from '@/containers';
import { routes as ArticlesRoutes } from '@/modules/articles';
import { routes as AuthRoutes } from '@/modules/auth';
import { routes as UserRoutes } from '@/modules/user';

export const router = createBrowserRouter([
  {
    path: RouterConfig.Home,
    element: <Layout />,
    errorElement: <Layout />,
    children: [...ArticlesRoutes, ...AuthRoutes, ...UserRoutes],
  },
  {
    path: RouterConfig.Unauthorized,
    element: <Unauthorized />,
  },
  {
    path: RouterConfig.NotFound,
    element: <NotFound />,
  },
]);
