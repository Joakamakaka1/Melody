import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/shared/Header.jsx";
import Footer from "./components/shared/Footer.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import Profile from "./pages/Profile.jsx";
import Members from "./pages/Members.jsx";
import PlaylistDetail from "./pages/PlaylistDetail.jsx";
import PlaylistInfo from "./pages/PlaylistInfo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/members" element={<Members />} />
        <Route path="/playlistdetail" element={<PlaylistDetail />} />
        <Route path="/playlistInfo" element={<PlaylistInfo />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);
