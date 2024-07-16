import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Navbar from "../components/MainPage/Navbar";
import HomePage from "../components/MainPage/Homepage";
import Footer from "../components/MainPage/Footer";
import CoffeeTypes from "./CoffeeTypesPage";
import ShopReviewPage from "./ShopReviewPage";
import ReviewPage from "./ReviewPage";
import AddReviewModel from "../components/models/AddReviewModel";
import AddCommentModel from "../components/models/AddCommentModel";


function MainPage() {
  const [addReviewState, setAddReviewState] = useState(false);
  const [addCommentState, setAddCommentState] = useState(false);
  return (
    <div>
      <AddReviewModel state={addReviewState} setState={setAddReviewState} />
      <AddCommentModel state={addCommentState} setState={setAddCommentState} />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coffeetypes" element={<CoffeeTypes />} />
        <Route
          path="/shopreview"
          element={<ShopReviewPage setState={setAddReviewState} />}
        />
        <Route path="/shopreview/:id" element={<ReviewPage setState={setAddCommentState}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default MainPage;