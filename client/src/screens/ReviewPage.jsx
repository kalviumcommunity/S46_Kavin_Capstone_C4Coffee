import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Star from "../components/ShopReviewPage/Star";
import Comment from "../components/ShopReviewPage/Comment";

function ReviewPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const GET_REVIEW_BY_ID = {
      query: `query getShopReviewById($reviewById: String!) {
    reviewById(id: $reviewById) {
        name
        desc
        rating
        image
        createdAt
        userId{
            username
        }
        comment{
            content
            rating
            createdAt
            userId{
                username
          }
        }
      }
    }`,
      variables: { reviewById: id },
    };

    axios
      .post("http://localhost:3000/graphql", GET_REVIEW_BY_ID)
      .then((res) => setData(res.data.data.reviewById));
  }, [id]);

  return (
    <div className="min-h-dvh bg-backGround1 px-20 py-10">
      {/* <div>{JSON.stringify(data?.comment)}</div> */}
      <div className="flex items-center justify-between">
        <div className="text-3xl font-bold text-text2">{data?.name}</div>
        {data && <Star rating={data?.rating} />}
      </div>
      <hr className="my-4 h-1 rounded border-0 bg-text2" />
      <div className="grid grid-cols-2 p-4">
        <div>{data?.desc}</div>
        <div className="flex justify-end">
          <img
            src={`data:image/png;base64,${data?.image}`}
            alt="shop-image"
            className="w-3/4"
          />
        </div>
      </div>
      <hr className="my-4 h-1 rounded border-0 bg-text2" />
      <div>
        <div className="flex justify-between items-center my-2">
          <div className="my-4 text-3xl font-bold text-text1">Comments</div>
          <div className="flex cursor-pointer gap-1 rounded bg-text2 p-2 text-backGround1 shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add comment
          </div>
        </div>
        {data && data.comment.map((c) => <Comment comment={c} key={c._id} />)}
      </div>
    </div>
  );
}

export default ReviewPage;
