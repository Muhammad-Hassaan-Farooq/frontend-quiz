import { useSelector } from "react-redux";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FAQPage from "./pages/FAQPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/FAQ" element={<FAQPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
