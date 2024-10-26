import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import HomePage from "./pages/HomePage";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-secondary text-white shadow-md hover:bg-primary transition"
    >
      {isDarkMode ? <MdOutlineLightMode size={24} /> : <MdDarkMode size={24} />}
    </button>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen font-poppins transition-colors duration-300 bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText">
        <Router>
          <header className="flex justify-between items-center p-4 shadow-md">
            <h1 className="text-2xl font-bold">Weather Dashboard</h1>
            <ThemeToggle />
          </header>

          <main className="p-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </main>

          <footer className="text-center p-4 text-sm">
            Built with ❤️ by Pooja
          </footer>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
