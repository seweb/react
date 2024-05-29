import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';
import { RouterConfig } from '@/constants/routes';

const SignInPage = lazy(() => import('@/modules/auth/pages/SignInPage'));
const SignUpPage = lazy(() => import('@/modules/auth/pages/SignUpPage'));

export const routes: RouteObject[] = [
  {
    path: RouterConfig.SignIn,
    element: <SignInPage />,
  },
  {
    path: RouterConfig.SignUp,
    element: <SignUpPage />,
  },
];
