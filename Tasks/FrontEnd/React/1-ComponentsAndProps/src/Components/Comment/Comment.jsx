const Comment = ({ author, text, timestamp, likes }) => {
  return (
    <article className="comment-card">
      <p className="comment-card__author">{author}</p>
      <p className="comment-card__text">{text}</p>
      <div className="comment-card__meta">
        <span>{timestamp}</span>
        <span>{likes} likes</span>
      </div>
    </article>
  );
};

export default Comment;
