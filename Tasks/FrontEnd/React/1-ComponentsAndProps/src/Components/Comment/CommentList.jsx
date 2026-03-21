import Comment from "./Comment";
import "./comment.css";

const CommentList = ({ comments = [], postTitle }) => {
  return (
    <section className="comment-list">
      <h2 className="comment-list__title">{postTitle}</h2>
      {comments.map((comment, index) => (
        <Comment
          key={`${comment.author}-${index}`}
          author={comment.author}
          text={comment.text}
          timestamp={comment.timestamp}
          likes={comment.likes}
        />
      ))}
    </section>
  );
};

export default CommentList;
