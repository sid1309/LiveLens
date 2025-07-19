import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
import Signup from "./components/auth/Signup.jsx";
import UserLogin from "./components/auth/UserLogin.jsx";
import Bookmarks from "./components/Bookmarks";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

import "./App.css";

const App = () => {
  const [category, setCategory] = useState("topic-news-by-section?topic=WORLD");
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));


   return (
    <>
      <Navbar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        category={category}
        setCategory={setCategory}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Routes>
        <Route path="/" element={<NewsBoard category={category} darkMode={darkMode} />} />
        <Route path="/login" element={<UserLogin setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/bookmarks" element={<Bookmarks darkMode={darkMode} />} />
      </Routes>
    </>
  );
};

export default App;
