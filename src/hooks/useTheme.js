import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    // Read from localStorage, fallback to dark
    return localStorage.getItem('sk-theme') || 'dark';
  });

  useEffect(() => {
    // Apply theme class to <html>
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('sk-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
}
