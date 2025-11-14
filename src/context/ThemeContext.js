// src/context/ThemeContext.jsx
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
<div className={`${darkMode ? 'bg-dark text-light' : 'bg-baby-blue text-dark'}`}>
  {children}
</div>

    </ThemeContext.Provider>
  );
};
