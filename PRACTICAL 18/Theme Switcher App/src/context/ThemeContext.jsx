
import { createContext, useState, useContext } from 'react';

// Create Context
const ThemeContext = createContext();

// Theme Provider Component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const themeStyles = {
    light: {
      backgroundColor: '#ffffff',
      color: '#000000'
    },
    dark: {
      backgroundColor: '#333333',
      color: '#ffffff'
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeStyles }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use theme context
export const useTheme = () => useContext(ThemeContext);