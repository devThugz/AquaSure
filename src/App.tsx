import React, { useEffect, useState } from 'react';
import { AppRouter } from './AppRouter';
import { AuthProvider } from './contexts/AuthContext';
import { GameProvider } from './contexts/GameContext';
import { ThemeProvider } from './contexts/ThemeContext';
export function App() {
  // Change default to false to ensure Light Mode is the default
  const [darkMode, setDarkMode] = useState(false);
  // Check if dark mode is enabled in localStorage
  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      // Ensure light mode is set as default
      localStorage.setItem('darkMode', 'false');
      document.documentElement.classList.remove('dark');
    }
  }, []);
  // Function to toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  };
  return <ThemeProvider initialDarkMode={darkMode} toggleDarkMode={toggleDarkMode}>
      <AuthProvider>
        <GameProvider>
          <AppRouter />
        </GameProvider>
      </AuthProvider>
    </ThemeProvider>;
}