import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CommentsQueryKeys, Comment, CommentsPayload } from '@/modules/articles/api/articles.types';
import { postComments } from '@/modules/articles/api/articles.api';
import { ErrorResponse } from '@/types';

// export const usePostComments = (slug: string, data: CommentsPayload) => {
//   return useMutation<Comment, ErrorResponse, CommentsPayload>({
//     mutationKey: [CommentsQueryKeys.Post],
//     mutationFn: () => postComments(slug, data),
//   });
// };

export const usePostComments = () => {
  const queryClient = useQueryClient();
  return useMutation<Comment, ErrorResponse, CommentsPayload>({
    mutationKey: [CommentsQueryKeys.Post],
    mutationFn: (data) => postComments(data),
    onSuccess: (data) => {
      queryClient.resetQueries({ queryKey: [CommentsQueryKeys.Post] });
    },
  });
};
