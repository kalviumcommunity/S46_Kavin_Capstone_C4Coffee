import { Route, Routes } from "react-router-dom";

import Navbar from "../components/MainPage/Navbar";
import HomePage from "../components/MainPage/Homepage";
import Footer from "../components/MainPage/Footer";
import CoffeeTypes from "./CoffeeTypesPage";
import ShopReviewPage from "./ShopReviewPage";

function MainPage() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coffeetypes" element={<CoffeeTypes />} />
        <Route path="/shopreview" element={<ShopReviewPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default MainPage;
