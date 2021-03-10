import React from 'react';
import LineItemButtons from './LineItemButtons';
import '../styles/ProjectLineItem.css';

function ProjectLineItem({
  color,
  isActive,
  id,
  setActiveProjectId,
  children,
}) {
  let buttonClasses = 'ProjectLineItem__button';
  if (isActive) {
    buttonClasses += ' ProjectLineItem__button--active';
  }
  return (
    <li className="ProjectLineItem">
      <button
        className={buttonClasses}
        data-color={color}
        onClick={(e) => {
          if (isActive) return;
          setActiveProjectId(id);
        }}
        type="button"
      >
        {children}
        <LineItemButtons edit move remove />
      </button>
    </li>
  );
}

export default ProjectLineItem;
