import { useQuery } from '@tanstack/react-query';
import { ErrorResponse } from '@/types';

import { User, UserQueryKeys } from '@/modules/user/api/user.types';
import { getUser } from '@/modules/user/api/user.api';

export const useGetUser = () =>
  useQuery<User, ErrorResponse>({
    queryKey: [UserQueryKeys.Get],
    queryFn: () => getUser(),
    // staleTime: Infinity,
    // cacheTime: Infinity,
  });
