import React from 'react';
import '../styles/IconButton.css';

function IconButton({
  children,
  color,
  ariaLabel,
  background,
  handleClick,
  size = 'md',
  borderRadius,
  isSubmit,
}) {
  // Add styled components for darkening the background
  const styles = {
    color: color || 'currentColor',
    background: background || 'initial',
    borderRadius: borderRadius || '50%',
  };
  const classes = `IconButton IconButton--${size}`;
  return (
    <button
      className={classes}
      type={isSubmit ? 'submit' : 'button'}
      style={styles}
      aria-label={ariaLabel}
      onClick={(e) => {
        e.stopPropagation();
        if (handleClick) handleClick();
      }}
    >
      {children}
    </button>
  );
}

export default IconButton;
