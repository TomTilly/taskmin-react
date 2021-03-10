import React from 'react';
import { ReactComponent as Move } from 'bootstrap-icons/icons/arrows-move.svg';
import { ReactComponent as Pencil } from 'bootstrap-icons/icons/pencil-fill.svg';
import { ReactComponent as Trash } from 'bootstrap-icons/icons/trash.svg';
import IconButton from './IconButton';

function LineItemButtons({ move, edit, remove }) {
  let buttons;

  return (
    <div className="LineItemButtons">
      {edit && (
        <IconButton color="#44AB96" ariaLabel="Edit project title">
          <Pencil />
        </IconButton>
      )}
      {move && (
        <IconButton color="#4484AB" ariaLabel="Move project">
          <Move />
        </IconButton>
      )}
      {remove && (
        <IconButton color="#E53855" ariaLabel="Delete project">
          <Trash />
        </IconButton>
      )}
    </div>
  );
}

export default LineItemButtons;
