import { useState, useEffect } from 'react';

interface UseThemeReturn {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const useTheme = (): UseThemeReturn => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'light' || (!savedTheme && !systemPrefersDark)) {
      setIsDarkMode(false);
      document.body.classList.remove('light-theme');
    } else {
      setIsDarkMode(true);
      document.body.classList.add('light-theme');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('light-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  return { isDarkMode, toggleTheme };
};

export default useTheme;