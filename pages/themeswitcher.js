import React, { useState, useEffect } from "react";

function ThemeSwitcher() {
  const [theme, setTheme] = useState("light"); // Default theme is light
  const [isMenuOpen, setIsMenuOpen] = useState(false); // To toggle the theme options menu

  // UseEffect to check if a theme is already stored in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme); // Add the saved theme class to HTML
    } else {
      document.documentElement.classList.add(theme);
    }
  }, [theme]);

  // Function to change the theme and save to localStorage
  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.classList.remove("light", "dark", "gray"); // Remove all themes
    document.documentElement.classList.add(newTheme); // Add the new theme
    localStorage.setItem("theme", newTheme); // Save theme to localStorage
  };

  return (
    <div>
      {/* Theme Switcher Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu visibility
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none"
        >
          <span className="material-icons">color_lens</span> {/* Icon for color change */}
        </button>

        {/* Theme Options Menu */}
        {isMenuOpen && (
          <div
            className="absolute bg-white shadow-lg p-4 rounded-md flex flex-col space-y-2 mt-2 right-0 z-40"
            style={{ transition: "all 0.3s ease-in-out" }} // Smooth transition for menu
          >
            <button
              onClick={() => changeTheme("light")}
              className="py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Light
            </button>
            <button
              onClick={() => changeTheme("dark")}
              className="py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Dark
            </button>
            <button
              onClick={() => changeTheme("gray")}
              className="py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Gray
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ThemeSwitcher;
