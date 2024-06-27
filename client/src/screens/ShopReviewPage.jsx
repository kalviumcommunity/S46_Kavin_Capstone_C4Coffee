import axios from "axios";
import { useEffect, useState } from "react";
import Review from "../components/ShopReviewPage/Review";

const GET_REVIEWS = {
  query: `query getAllShopReview {
    allReviews {
      _id
        name
        desc
        createdAt
        rating
        image
        userId{
            username
        }
    }
}`,
  variables: {},
};

function ShopReviewPage() {
  useEffect(() => {
    axios
      .post("http://localhost:3000/graphql", GET_REVIEWS)
      .then((res) => setReviewData(res.data.data.allReviews));
  }, []);

  const [reviewData, setReviewData] = useState([]);
  return (
    <div className="min-h-dvh bg-backGround1 px-14 py-10">
      <div className="flex justify-end pb-4">
        <div className="cursor-pointer rounded bg-text2 p-2 text-backGround1 shadow flex gap-1">
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
          Add review
        </div>
      </div>
      {reviewData.map((data) => (
        <Review key={data._id} review={data} />
      ))}
    </div>
  );
}

export default ShopReviewPage;
