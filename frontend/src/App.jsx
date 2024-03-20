import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./screens/HomePage";
import TestComponent from "./components/TestComponent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
