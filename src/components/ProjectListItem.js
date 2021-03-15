import React from 'react';
import useToggleState from '../hooks/useToggleState';
import LineItemButtons from './LineItemButtons';
import LineItemForm from './LineItemForm';
import '../styles/ProjectListItem.css';

function ProjectListItem({
  color,
  isActive,
  id,
  setActiveProjectId,
  children,
  setActivePanel,
  updateProject,
  removeProject,
}) {
  const [isEditing, toggle] = useToggleState(false);
  let buttonClasses = 'ProjectListItem__button';
  if (isActive) {
    buttonClasses += ' ProjectListItem__button--active';
  }
  return (
    <li className="ProjectListItem">
      {isEditing ? (
        <LineItemForm
          name={children}
          onSubmit={(updatedValue) => {
            updateProject('title', updatedValue, id);
            toggle();
          }}
        />
      ) : (
        <button
          className={buttonClasses}
          data-color={color}
          onClick={(e) => {
            setActivePanel('tasks');
            if (isActive) return;
            setActiveProjectId(id);
          }}
          type="button"
        >
          {children}
          <LineItemButtons
            edit={toggle}
            move
            remove={() => removeProject(id)}
          />
        </button>
      )}
    </li>
  );
}

export default ProjectListItem;
