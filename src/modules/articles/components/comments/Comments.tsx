import { Link } from 'react-router-dom';
type CommentsProps = {
  commentsData: {
    comments: any[];
  };
};
export function Comments(props: CommentsProps) {
  const { commentsData } = props;
  console.log('data comments', commentsData);
  //const { pagesCount, activePage, onClick } = props;
  return (
    <>
      {commentsData?.comments.length &&
        commentsData?.comments.map((comment) => (
          <div
            className="card"
            key={comment.id}
          >
            <div className="card-block">
              <p className="card-text">{comment.body}</p>
            </div>
            <div className="card-footer">
              {/* <a
                href="/profile/author"
                className="comment-author"
              >
                <img
                  src="http://i.imgur.com/Qr71crq.jpg"
                  className="comment-author-img"
                  alt="Author"
                />
              </a> */}
              <Link
                to={`/profile/${comment.author.username}`}
                className="comment-author"
              >
                <img
                  src={comment.author.image}
                  className="comment-author-img"
                  alt="Author"
                />
              </Link>
              &nbsp;
              {/* <a
                href="/profile/jacob-schmidt"
                className="comment-author"
              >
                Jacob Schmidt
              </a> */}
              <Link to={`/profile/${comment.author.username}`}>{comment.author.username}</Link>
              <span className="date-posted">Dec 29th</span>
            </div>
          </div>
        ))}
    </>
  );
}
