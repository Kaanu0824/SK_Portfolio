import React from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ theme, toggleTheme }) => {
  const isDark = theme === 'dark';

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className={`toggle-track${isDark ? '' : ' light'}`}>
        <div className="toggle-thumb">
          <span className="toggle-icon">
            {isDark ? '🌙' : '☀️'}
          </span>
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
