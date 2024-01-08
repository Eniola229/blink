import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Profile from "./Profile";

export default function Routespages() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}
