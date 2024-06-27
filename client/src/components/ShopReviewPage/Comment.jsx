import Star from "./Star";

function Comment({ comment }) {
  return (
    <div className="rounded bg-backGround2 p-2 shadow">
      <div className="flex justify-between ">
        <div className="text-lg text-text2 font-medium">{comment.content}</div>
        <Star rating={comment.rating} />
      </div>
      <hr className="my-3 h-0.5 border-0 bg-text2" />
      <div className="flex justify-between">
        <div className="text-xs text-text2">
          Commented by {comment.userId.username}
        </div>
        <div className="text-xs text-text2">Commented {comment.createdAt}</div>
      </div>
    </div>
  );
}

export default Comment;
