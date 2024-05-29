import { useMutation } from '@tanstack/react-query';
import { FavoriteQueryKeys } from './favorite.types';
import { postFavorite } from './favorite.api';

export const usePostFavorite = (slug: string) => {
  return useMutation<never, never>({
    mutationKey: [FavoriteQueryKeys.Post],
    mutationFn: () => postFavorite(slug),
  });
};
