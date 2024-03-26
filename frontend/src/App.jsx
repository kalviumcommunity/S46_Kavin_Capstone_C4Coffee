import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TestComponent from "./components/TestComponent";
import Footer from "./components/Footer";
import Signup from "./screens/Signup";
import MainPage from "./screens/MainPage";
import Login from "./screens/Login";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="*" element={<MainPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
