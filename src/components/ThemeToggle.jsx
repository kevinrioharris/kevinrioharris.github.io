import React from 'react';
import useTheme from '../hooks/useTheme';
import Icon from './Icon';
import '../styles/components/ThemeToggle.css';

const ThemeToggle = () => {
  const [theme, toggleTheme] = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <Icon name={isDark ? 'moon' : 'sun'} className="theme-toggle-icon" />
    </button>
  );
};

export default ThemeToggle;
