import React from 'react';
import '../styles/IconButton.css';

function IconButton({ children, color, ariaLabel }) {
  return (
    <button
      className="IconButton"
      type="button"
      style={{ color }}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export default IconButton;
