import React from 'react';
import '../styles/Button.css';

function Button({ children, className, onClick, background, color }) {
  const styles = {
    color: color || 'currentColor',
    background: background || 'initial',
  };
  const classes = `Button ${className}`;
  return (
    <button className={classes} type="button" onClick={onClick} style={styles}>
      {children}
    </button>
  );
}

export default Button;
