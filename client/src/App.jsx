import { Routes, Route } from "react-router-dom";
import MainPage from "./screens/MainPage";
import Signup from "./screens/SignupPage";
import Login from "./screens/LoginPage";

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
