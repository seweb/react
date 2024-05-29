import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import { RouterConfig } from '@/constants/routes';

const ArticlesListPage = lazy(() => import('@/modules/articles/pages/ArticlesListPage'));
const FeedsListPage = lazy(() => import('@/modules/articles/pages/FeedsListPage'));
const ArticlePage = lazy(() => import('@/modules/articles/pages/ArticlePage'));
const CreateArticlePage = lazy(() => import('@/modules/articles/pages/CreateArticlePage'));
const EditArticlePage = lazy(() => import('@/modules/articles/pages/EditArticlePage'));

export const routes: RouteObject[] = [
  {
    index: true,
    element: <ArticlesListPage />,
  },
  {
    path: RouterConfig.Feeds,
    element: <FeedsListPage />,
  },
  {
    path: RouterConfig.Article,
    element: <ArticlePage />,
  },
  {
    path: RouterConfig.Create,
    element: <CreateArticlePage />,
  },
  {
    path: RouterConfig.Edit,
    element: <EditArticlePage />,
  },
];
