import React from 'react';
import LineItemButtons from './LineItemButtons';
import '../styles/ProjectListItem.css';

function ProjectListItem({
  color,
  isActive,
  id,
  setActiveProjectId,
  children,
}) {
  let buttonClasses = 'ProjectListItem__button';
  if (isActive) {
    buttonClasses += ' ProjectListItem__button--active';
  }
  return (
    <li className="ProjectListItem">
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

export default ProjectListItem;
