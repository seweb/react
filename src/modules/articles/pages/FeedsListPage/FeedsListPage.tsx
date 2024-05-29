import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Article } from '@/modules/articles/components/Article';
import { TagsList } from '@/components';
import { Pagination } from '@/modules/articles/components/Pagination';
import { useGetFeeds } from '@/modules/articles/api/articles.query';
import { useGetTags } from '@/api/tags/tags.query';
import { usePagination } from '@/hooks';
import { perPage } from '@/constants/config';

function FeedsListPage() {
  const [params, setParams] = useState({ limit: perPage });
  const [activePage, setActivePage] = useState(1);

  const { t } = useTranslation();

  const { data } = useGetFeeds(params);

  const pagesCount = usePagination(data);
  const changePage = (page: number) => {
    setParams((params) => ({
      ...params,
      offset: (page - 1) * 10,
    }));
    setActivePage(page);
  };

  const { data: tagsData } = useGetTags();
  const filterByTag = (tag: string) => {
    setParams((params) => ({
      ...params,
      tag,
    }));
  };

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>{t('articles:subtitle')}</p>
        </div>
      </div>
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className="nav-link"
                  >
                    {t('articles:globalFeed')}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/feeds"
                    className="nav-link"
                  >
                    {t('articles:yourFeed')}
                  </NavLink>
                </li>
              </ul>
            </div>
            {data?.articles &&
              data?.articles.map((article, key: number) => (
                <Article
                  article={article}
                  key={key}
                />
              ))}
            {data?.articles.length ? (
              <Pagination
                pagesCount={pagesCount}
                activePage={activePage}
                onClick={changePage}
              />
            ) : null}
          </div>

          <div className="col-md-3">
            <div className="sidebar">
              <TagsList
                tags={tagsData?.tags}
                onClick={filterByTag}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedsListPage;
