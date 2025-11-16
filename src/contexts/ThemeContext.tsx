import React, { useEffect, useState, createContext, useContext } from 'react';
interface ThemeContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);
export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
interface ThemeProviderProps {
  children: React.ReactNode;
  initialDarkMode: boolean;
  toggleDarkMode: () => void;
}
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialDarkMode,
  toggleDarkMode
}) => {
  const [darkMode, setDarkMode] = useState(initialDarkMode);
  useEffect(() => {
    setDarkMode(initialDarkMode);
  }, [initialDarkMode]);
  // Ensure document class is synced with darkMode state
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  const value = {
    darkMode,
    toggleDarkMode
  };
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};