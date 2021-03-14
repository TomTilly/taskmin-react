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
  className,
}) {
  // Add styled components for darkening the background
  const styles = {
    color: color || 'currentColor',
    background: background || 'initial',
    borderRadius: borderRadius || '50%',
  };
  let classes = `IconButton IconButton--${size}`;
  if (className) {
    classes += ` ${className}`;
  }
  return (
    <button
      className={classes}
      type={isSubmit ? 'submit' : 'button'}
      style={styles}
      aria-label={ariaLabel}
      onClick={(e) => {
        e.stopPropagation();
        if (handleClick) handleClick(e);
      }}
    >
      {children}
    </button>
  );
}

export default IconButton;
