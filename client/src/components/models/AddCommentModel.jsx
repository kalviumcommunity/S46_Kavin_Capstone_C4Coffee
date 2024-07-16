import { Rating } from "@material-tailwind/react";

function AddReviewModel({ state, setState }) {
  return (
    <div
      className={
        state ? "fixed top-0 z-20 h-full w-full backdrop-blur-sm" : "hidden"
      }
    >
      <div className="bg-backGround2 absolute left-1/2 top-1/2 w-1/3 -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center justify-between bg-text2 p-2">
          <div className="text-xl font-semibold text-backGround1">
            Add new comment
          </div>
          <div className="cursor-pointer" onClick={() => setState(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-6 text-backGround1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <div className="p-2">
          <div className="py-2">
            <div className="font-semibold text-text1">Comment</div>
            <textarea className="w-full" />
          </div>
          <div>
            <Rating unratedColor="brown" ratedColor="brown" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="m-2 cursor-pointer rounded bg-text1 px-4 py-2 font-semibold text-backGround1">
            Add Comment
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddReviewModel;
