import { Rating } from "@material-tailwind/react";

function AddReviewModel({ state, setState }) {
  return (
    <div
      className={
        state ? "fixed top-0 z-20 h-full w-full backdrop-blur-sm" : "hidden"
      }
    >
      <div className="absolute left-1/2 top-1/2 w-1/3 -translate-x-1/2 -translate-y-1/2 bg-backGround2">
        <div className="flex items-center justify-between bg-text2 p-2">
          <div className="text-xl font-semibold text-backGround1">
            Add new review
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
            <div className="font-medium text-text1">Shop name</div>
            <input type="text" name="name" id="name" className="w-full" />
          </div>
          <div className="py-2">
            <div className="font-medium text-text1">Description</div>
            <textarea className="w-full" />
          </div>
          <div>
            <div className="font-medium text-text1">Shop image</div>
            <input type="file" name="image" id="image" className="w-full" />
          </div>
          <div className="py-4">
            <Rating
              unratedColor="brown"
              ratedColor="brown"
              onChange={(e) => console.log(e)}
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="text-backGround1 m-2 cursor-pointer rounded bg-text1 px-4 py-2 font-semibold">
            Add Review
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddReviewModel;
