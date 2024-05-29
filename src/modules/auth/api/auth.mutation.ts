import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ErrorResponse } from '@/types';
import {
  User,
  UserLogin,
  UserCreatePayload,
  UserLoginPayload,
  UserQueryKeys,
} from '@/modules/auth/api/auth.types';
import { createUser, loginUser } from '@/modules/auth/api/auth.api';

export const useCreateUser = () => {
  return useMutation<User, ErrorResponse, UserCreatePayload>({
    mutationKey: [UserQueryKeys.Create],
    mutationFn: (data) => createUser(data),
  });
};

export const useLoginUser = () => {
  const queryClient = useQueryClient();
  return useMutation<UserLogin, ErrorResponse, UserLoginPayload>({
    mutationKey: [UserQueryKeys.Login],
    mutationFn: (data) => loginUser(data),
    onSuccess: (data) => {
      queryClient.setQueriesData({ queryKey: [UserQueryKeys.Login] }, data);
    },
    // staleTime: Infinity,
    // cacheTime: Infinity,
  });
};
