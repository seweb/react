import { useMemo } from 'react';
import { perPage } from '@/constants/config';

type Data = {
  articles: [];
  articlesCount: number;
};

export const usePagination = (data: Data) => {
  const pagesCount = useMemo(() => {
    const pages = data?.articlesCount ? Math.ceil(data?.articlesCount / perPage) : 1;
    let res = [];
    for (let i = 1; i <= pages; i++) {
      res.push(i);
    }
    return res;
  }, [data?.articlesCount, perPage]);

  return pagesCount;
};
