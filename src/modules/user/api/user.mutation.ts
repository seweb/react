import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ErrorResponse } from '@/types';
import { User, UserUpdatePayload, UserQueryKeys } from '@/modules/user/api/user.types';
import { updateUser } from '@/modules/user/api/user.api';

export const useUpdateUser = () => {
  return useMutation<User, ErrorResponse, UserUpdatePayload>({
    mutationKey: [UserQueryKeys.Put],
    mutationFn: (data) => updateUser(data),
  });
};
