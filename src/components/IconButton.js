import React from 'react';
import '../styles/IconButton.css';
import { lightenDarkenColor } from '../utilities';

function IconButton({
  children,
  color,
  ariaLabel,
  hasBackground,
  size = 'md',
}) {
  // Add styled components for darkening the background
  const styles = {
    color: color || 'currentColor',
  };
  let classes = `IconButton IconButton--${size}`;
  if (hasBackground) {
    classes += ' IconButton--hasBackground';
  }
  return (
    <button
      className={classes}
      type="button"
      style={styles}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export default IconButton;
