import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';
import { RouterConfig } from '@/constants/routes';

const ProfilePage = lazy(() => import('@/modules/user/pages/ProfilePage'));
const FavoritesPage = lazy(() => import('@/modules/user/pages/FavoritesPage'));
const SettingsPage = lazy(() => import('@/modules/user/pages/SettingsPage'));
import { ProtectedRoute } from '@/containers';

export const routes: RouteObject[] = [
  {
    path: RouterConfig.Profile,
    element: (
      <ProtectedRoute>
        <ProfilePage />
      </ProtectedRoute>
    ),
  },
  {
    path: RouterConfig.Favorites,
    element: (
      <ProtectedRoute>
        <FavoritesPage />
      </ProtectedRoute>
    ),
  },
  {
    path: RouterConfig.Settings,
    element: (
      <ProtectedRoute>
        <SettingsPage />
      </ProtectedRoute>
    ),
  },
];
