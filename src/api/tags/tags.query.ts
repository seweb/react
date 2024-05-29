import { useQuery } from '@tanstack/react-query';
import { ErrorResponse } from '@/types';

import { Tags, TagsQueryKeys } from './tags.types';
import { getTags } from './tags.api';

export const useGetTags = () =>
  useQuery<Tags, ErrorResponse>({
    queryKey: [TagsQueryKeys.Get],
    queryFn: () => getTags(),
  });
