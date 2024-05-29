import { useMutation } from '@tanstack/react-query';
import { FollowQueryKeys } from './follow.types';
import { postFollow } from './follow.api';

export const usePostFollow = (username: string) => {
  return useMutation<never, never>({
    mutationKey: [FollowQueryKeys.Post],
    mutationFn: () => postFollow(username),
  });
};
