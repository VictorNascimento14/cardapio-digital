

import React from 'react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label="Alternar tema"
      className="relative w-24 h-12 flex items-center rounded-full p-1 cursor-pointer border-none outline-none bg-transparent"
      style={{ boxShadow: '0 2px 8px #0001', transition: 'background 0.5s' }}
    >
      {/* Fundo ilustrado */}
      <div
        className="absolute inset-0 rounded-full overflow-hidden"
        style={{
          background: isDark
            ? 'radial-gradient(circle at 70% 30%, #232946 60%, #181c2a 100%)'
            : 'linear-gradient(135deg, #b3e0ff 0%, #e0e7ff 100%)',
          transition: 'background 0.5s',
        }}
      >
        {/* Nuvens para o modo claro */}
        {!isDark && (
          <svg width="100%" height="100%" viewBox="0 0 96 48" className="absolute left-0 top-0">
            <ellipse cx="30" cy="38" rx="18" ry="8" fill="#fff8" />
            <ellipse cx="60" cy="34" rx="16" ry="7" fill="#fff6" />
            <ellipse cx="70" cy="44" rx="12" ry="6" fill="#fff4" />
          </svg>
        )}
        {/* Estrelas para o modo escuro */}
        {isDark && (
          <svg width="100%" height="100%" viewBox="0 0 96 48" className="absolute left-0 top-0">
            <circle cx="20" cy="18" r="1.2" fill="#fff" />
            <circle cx="40" cy="10" r="0.8" fill="#fff8" />
            <circle cx="60" cy="20" r="1.1" fill="#fff6" />
            <circle cx="80" cy="12" r="0.7" fill="#fff7" />
            <circle cx="70" cy="30" r="0.9" fill="#fff5" />
          </svg>
        )}
      </div>
      {/* Sol/Lua */}
      <div
        className="absolute top-1 left-1 transition-transform duration-500"
        style={{
          transform: isDark ? 'translateX(48px)' : 'translateX(0)',
          zIndex: 2,
        }}
      >
        {isDark ? (
          // Lua
          <svg width="40" height="40" viewBox="0 0 40 40">
            <circle cx="20" cy="20" r="16" fill="#d1d5db" />
            <circle cx="26" cy="16" r="4" fill="#cbd5e1" />
            <circle cx="16" cy="26" r="2.5" fill="#e5e7eb" />
            <circle cx="24" cy="28" r="1.5" fill="#b6bbc4" />
          </svg>
        ) : (
          // Sol
          <svg width="40" height="40" viewBox="0 0 40 40">
            <circle cx="20" cy="20" r="16" fill="#ffd600" stroke="#ffb300" strokeWidth="2" />
            <circle cx="20" cy="20" r="10" fill="#fff176" opacity="0.3" />
          </svg>
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
