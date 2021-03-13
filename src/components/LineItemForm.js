import React from 'react';
import { ReactComponent as Checkmark } from 'bootstrap-icons/icons/check2.svg';
import { ReactComponent as X } from 'bootstrap-icons/icons/x.svg';
import useInputState from '../hooks/useInputState';
import IconButton from './IconButton';
import { themeColors } from '../utilities';
import '../styles/LineItemForm.css';

function LineItemForm({ name, onSubmit }) {
  const [value, setValue] = useInputState(name);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <form className="LineItemForm" onSubmit={handleSubmit}>
      <input
        className="LineItemForm__input"
        type="text"
        value={value}
        onChange={setValue}
        placeholder="Enter your project name..."
      />
      <IconButton
        color="white"
        background={themeColors.green}
        borderRadius="5px"
        size="lg"
        isSubmit
      >
        <Checkmark />
      </IconButton>
      <IconButton
        color="white"
        background={themeColors.red}
        borderRadius="5px"
        size="lg"
      >
        <X />
      </IconButton>
    </form>
  );
}

export default LineItemForm;
