/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import useToggleState from '../hooks/useToggleState';
import '../styles/CustomCheckbox.css';

function CustomCheckbox({ label, isComplete, toggleComplete }) {
  let labelClasses = 'CustomCheckbox__label';
  if (isComplete) {
    labelClasses += ' CustomCheckbox__label--complete';
  }

  return (
    <label className="CustomCheckbox">
      <span className="CustomCheckbox__input">
        <input
          type="checkbox"
          name="checkbox"
          checked={isComplete}
          onChange={toggleComplete}
        />
        <span className="CustomCheckbox__control">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
            className="CustomCheckbox__checkmark"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              d="M1.73 12.91l6.37 6.37L22.79 4.59"
            />
          </svg>
        </span>
      </span>
      <span className={labelClasses}>{label}</span>
    </label>
  );
}

export default CustomCheckbox;
