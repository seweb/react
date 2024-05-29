import { useQuery, useQueryClient } from '@tanstack/react-query';
import { ErrorResponse } from '@/types';

import {
  Articles,
  Article,
  ArticlesQueryKeys,
  ArticleQueryKeys,
  CommentsQueryKeys,
  FeedsQueryKeys,
  Comments,
} from '@/modules/articles/api/articles.types';
import {
  getArticles,
  getArticle,
  getFeeds,
  getComments,
} from '@/modules/articles/api/articles.api';

export const useGetArticles = (params: {}) =>
  useQuery<Articles, ErrorResponse>({
    queryKey: [ArticlesQueryKeys.Get, params],
    queryFn: () => getArticles(params),
  });

export const useGetArticle = (slug: string) =>
  useQuery<Article, ErrorResponse>({
    queryKey: [ArticleQueryKeys.Get, slug],
    queryFn: () => getArticle(slug),
  });

export const useGetFeeds = (params: {}) =>
  useQuery<Articles, ErrorResponse>({
    queryKey: [FeedsQueryKeys.Get, params],
    queryFn: () => getFeeds(params),
  });

export const useGetComments = (slug: string) =>
  useQuery<Comments, ErrorResponse>({
    queryKey: [CommentsQueryKeys.Get, slug],
    queryFn: () => getComments(slug),
  });
