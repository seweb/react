import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useGetArticle, useGetComments } from '@/modules/articles/api/articles.query';
import { usePostFollow } from '@/api/follow/follow.mutation';
import { usePostFavorite } from '@/api/favorite/favorite.mutation';
import { usePostComments } from '@/modules/articles/api/articles.mutation';
import { Link } from 'react-router-dom';
import { Textarea, Button } from '@/components';
import { Comments } from '@/modules/articles/components/comments';

function ArticlePage() {
  type CommentsData = {
    comment: {
      body: string;
    };
  };

  const [rows] = useState<number>(3);
  const { id: slug } = useParams();
  const { data } = useGetArticle(slug);
  const article = data?.article;
  console.log('data', data);

  const { mutate: postFollow } = usePostFollow(article?.author?.username);
  const { mutate: postFavorite } = usePostFavorite(slug);

  const folowUser = () => {
    postFollow();
  };

  const favoriteArticle = () => {
    postFavorite();
  };

  const editArticle = () => {
    console.log('edit');
  };

  const deliteArticle = () => {
    console.log('delete');
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<CommentsData>();

  const { mutate, isPending } = usePostComments();

  const onSubmit = (data: CommentsData) => {
    mutate({
      slug,
      payload: { comment: { body: data.comment } },
      onSuccess: () => {
        reset();
      },
    });
  };

  const { data: commentsData } = useGetComments(slug);
  console.log('comments', commentsData);

  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{article?.title}</h1>

          <div className="article-meta">
            <Link to={`/profile/${data?.article.author.username}`}>
              <img
                src={article?.author.image}
                alt="Author"
              />
            </Link>
            <div className="info">
              <Link to={`/profile/${data?.article.author.username}`}>
                {article?.author.username}
              </Link>
              <span className="date">January 20th</span>
            </div>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              onClick={folowUser}
            >
              <i className="ion-plus-round" />
              &nbsp; Follow {article?.author.username}{' '}
              <span className="counter">
                ({article?.author.following ? article?.author.following : 0})
              </span>
            </button>
            &nbsp;&nbsp;
            <button
              type="button"
              className="btn btn-sm btn-outline-primary"
              onClick={favoriteArticle}
            >
              <i className="ion-heart" />
              &nbsp; Favorite Post{' '}
              <span className="counter">({article?.favorited ? article?.favoritesCount : 0})</span>
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              onClick={editArticle}
            >
              <i className="ion-edit" /> Edit Article
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-danger"
              onClick={deliteArticle}
            >
              <i className="ion-trash-a" /> Delete Article
            </button>
          </div>
        </div>
      </div>

      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            {article?.body}
            <ul className="tag-list">
              <li className="tag-default tag-pill tag-outline">realworld</li>
              <li className="tag-default tag-pill tag-outline">implementations</li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="article-actions">
          <div className="article-meta">
            {/* <a href="profile.html">
              <img
                src="http://i.imgur.com/Qr71crq.jpg"
                alt="Author"
              />
            </a> */}
            <Link to={`/profile/${data?.article.author.username}`}>
              <img
                src={article?.author.image}
                alt="Author"
              />
            </Link>
            {/* <div className="info">
              <a
                href="/"
                className="author"
              >
                Eric Simons
              </a>
              <span className="date">January 20th</span>
            </div> */}
            <div className="info">
              <Link
                to={`/profile/${data?.article.author.username}`}
                className="author"
              >
                {article?.author.username}
              </Link>
              <span className="date">January 20th</span>
            </div>
            {/* <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
            >
              <i className="ion-plus-round" />
              &nbsp; Follow Eric Simons
            </button> */}
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              onClick={folowUser}
            >
              <i className="ion-plus-round" />
              &nbsp; Follow {article?.author.username}{' '}
              <span className="counter">
                ({article?.author.following ? article?.author.following : 0})
              </span>
            </button>
            &nbsp;
            <button
              type="button"
              className="btn btn-sm btn-outline-primary"
              onClick={favoriteArticle}
            >
              <i className="ion-heart" />
              &nbsp; Favorite Post{' '}
              <span className="counter">({article?.favorited ? article?.favoritesCount : 0})</span>
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              onClick={editArticle}
            >
              <i className="ion-edit" /> Edit Article
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-danger"
              onClick={deliteArticle}
            >
              <i className="ion-trash-a" /> Delete Article
            </button>
            {/* <button
              type="button"
              className="btn btn-sm btn-outline-primary"
            >
              <i className="ion-heart" />
              &nbsp; Favorite Article <span className="counter">(29)</span>
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
            >
              <i className="ion-edit" /> Edit Article
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-danger"
            >
              <i className="ion-trash-a" /> Delete Article
            </button> */}
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-md-8 offset-md-2">
            <form
              className="card comment-form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="card-block">
                {/* <textarea
                  className="form-control"
                  placeholder="Write a comment..."
                  rows={rows}
                /> */}
                <Textarea
                  className="form-control"
                  placeholder="Write a comment..."
                  rows={rows}
                  formItemRegister={register('comment', { required: 'Cant be empty' })}
                  error={errors.comment}
                />
              </div>
              <div className="card-footer">
                {/* <img
                  src="http://i.imgur.com/Qr71crq.jpg"
                  className="comment-author-img"
                  alt="Author"
                /> */}
                <img
                  src={article?.author.image}
                  className="comment-author-img"
                  alt="Author"
                />
                {/* <button
                  type="button"
                  className="btn btn-sm btn-primary"
                >
                  Post Comment
                </button> */}
                <Button
                  type="submit"
                  className="btn btn-sm btn-primary"
                  text="Post Comment"
                  isLoading={isPending}
                />
              </div>
            </form>
            <Comments commentsData={commentsData} />

            {/* <div className="card">
              <div className="card-block">
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional content.
                </p>
              </div>
              <div className="card-footer">
                <a
                  href="/profile/author"
                  className="comment-author"
                >
                  <img
                    src="http://i.imgur.com/Qr71crq.jpg"
                    className="comment-author-img"
                    alt="Author"
                  />
                </a>
                &nbsp;
                <a
                  href="/profile/jacob-schmidt"
                  className="comment-author"
                >
                  Jacob Schmidt
                </a>
                <span className="date-posted">Dec 29th</span>
              </div>
            </div> */}

            {/* <div className="card">
              <div className="card-block">
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional content.
                </p>
              </div>
              <div className="card-footer">
                <a
                  href="/profile/author"
                  className="comment-author"
                >
                  <img
                    src="http://i.imgur.com/Qr71crq.jpg"
                    className="comment-author-img"
                    alt="Author"
                  />
                </a>
                &nbsp;
                <a
                  href="/profile/jacob-schmidt"
                  className="comment-author"
                >
                  Jacob Schmidt
                </a>
                <span className="date-posted">Dec 29th</span>
                <span className="mod-options">
                  <i className="ion-trash-a" />
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlePage;
