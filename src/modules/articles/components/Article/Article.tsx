import { NavLink } from 'react-router-dom';
import { usePostFavorite } from '@/api/favorite/favorite.mutation';
import { Article as ArticleType } from '@/modules/articles/api/articles.types';

type ArticleProps = {
  article: ArticleType;
};
export function Article(props: ArticleProps) {
  const { article } = props;
  const { slug } = article;
  const { mutate } = usePostFavorite(slug);
  const submitFavorite = () => {
    mutate();
  };
  return (
    <div className="article-preview">
      <div className="article-meta">
        <NavLink to={`profile/${article.author.username}`}>
          <img
            src={article.author.image}
            alt="Author"
          />
        </NavLink>
        <div className="info">
          <NavLink
            to={`profile/${article.author.username}`}
            className="author"
          >
            {article.author.username}
          </NavLink>
          <span className="date">January 20th</span>
        </div>
        <button
          type="button"
          className="btn btn-outline-primary btn-sm pull-xs-right"
          onClick={submitFavorite}
        >
          <i className="ion-heart" />
          {article.favoritesCount}
        </button>
      </div>
      <NavLink
        to={`article/${article.slug}`}
        className="preview-link"
      >
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
        <ul className="tag-list">
          {article.tagList.map((tag, key: number) => (
            <li
              className="tag-default tag-pill tag-outline"
              key={key}
            >
              {tag}
            </li>
          ))}
        </ul>
      </NavLink>
    </div>
  );
}
