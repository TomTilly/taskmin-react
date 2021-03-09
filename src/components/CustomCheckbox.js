/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import '../styles/CustomCheckbox.css';

function CustomCheckbox(props) {
  return (
    <label className="CustomCheckbox">
      <span className="CustomCheckbox__input">
        <input type="checkbox" name="checkbox" />
        <span className="CustomCheckbox__control">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
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
      <span className="CustomCheckbox__label">Checkbox</span>
    </label>
  );
}

export default CustomCheckbox;
