import { Api } from '@/api/axios';
import {
  Articles,
  Article,
  ArticlesArgs,
  Comments,
  Comment,
  CommentsPayload,
} from '@/modules/articles/api/articles.types';

export const getArticles = async (params: ArticlesArgs) =>
  Api.get<never, Articles>('/articles', { params });

export const getArticle = async (slug: string) => Api.get<never, Article>(`/articles/${slug}`);

export const getFeeds = async (params: ArticlesArgs) =>
  Api.get<never, Articles>('/articles/feed', { params });

export const getComments = async (slug: string) =>
  Api.get<never, Comments>(`/articles/${slug}/comments`);

// export const postComments = async (slug: string, data: CommentsPayload) =>
//   Api.post<never, Comment>(`/articles/${slug}/comments`, data);

export const postComments = async (data) =>
  Api.post<never, Comment>(`/articles/${data.slug}/comments`, data.payload);
