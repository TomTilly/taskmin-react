import React from 'react';
import { ReactComponent as Move } from 'bootstrap-icons/icons/arrows-move.svg';
import { ReactComponent as Pencil } from 'bootstrap-icons/icons/pencil-fill.svg';
import { ReactComponent as Trash } from 'bootstrap-icons/icons/trash.svg';
import { themeColors } from '../utilities';
import IconButton from './IconButton';
import '../styles/LineItemButtons.css';

function LineItemButtons({ move, edit, remove }) {
  let buttons;

  return (
    <div className="LineItemButtons">
      {edit && (
        <IconButton
          color={themeColors.green}
          ariaLabel="Edit project title"
          handleClick={edit}
        >
          <Pencil />
        </IconButton>
      )}
      {move && (
        <IconButton color={themeColors.blue} ariaLabel="Move project">
          <Move />
        </IconButton>
      )}
      {remove && (
        <IconButton color={themeColors.red} ariaLabel="Delete project">
          <Trash />
        </IconButton>
      )}
    </div>
  );
}

export default LineItemButtons;
