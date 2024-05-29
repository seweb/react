import { Api } from '@/api/axios';

export const postFavorite = async (slug: string) =>
  Api.post<never, never>(`/articles/${slug}/favorite`);
