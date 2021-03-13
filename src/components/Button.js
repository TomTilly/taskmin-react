import React from 'react';
import '../styles/Button.css';

function Button({ children, className, onClick }) {
  const classes = `Button ${className}`;
  return (
    <button className={classes} type="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
