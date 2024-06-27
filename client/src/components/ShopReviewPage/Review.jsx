import { Link } from "react-router-dom";
import Star from "./Star";

function Review({ review }) {
  return (
    <Link to={`/shopreview/${review._id}`}>
      <div className="grid grid-cols-3 rounded bg-backGround2 p-4 shadow">
        <div className="col-span-2 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-text2">{review.name}</div>
              <Star rating={review.rating}/>
            </div>
            <div className="p-4 text-text2">{review.desc}</div>
          </div>
          <div>
            <hr className="bg-text2 h-1 border-0 rounded" />
            <div className="flex justify-between my-2">
              <div className="text-text2 font-medium text-xs">Created by {review.userId.username}</div>
              <div className="text-text2 font-medium text-xs">Created {review.createdAt}</div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <img
            src={`data:image/png;base64,${review.image}`}
            alt="shop-image"
            className="w-3/4"
          />
        </div>
      </div>
    </Link>
  );
}

export default Review;
