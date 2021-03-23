import React from 'react';
import useToggleState from '../hooks/useToggleState';
import LineItemButtons from './LineItemButtons';
import LineItemForm from './LineItemForm';
import '../styles/Project.css';

function Project({
  color,
  isActive,
  id,
  setActiveProjectId,
  children,
  setActivePanel,
  updateProject,
  removeProject,
}) {
  const [isEditing, toggle] = useToggleState(children === '');
  let buttonClasses = 'Project__button';
  if (isActive) {
    buttonClasses += ' Project__button--active';
  }
  return (
    <li className="Project">
      {isEditing ? (
        <LineItemForm
          name={children}
          placeholder="Enter your project name..."
          onSubmit={(updatedValue) => {
            if (updatedValue !== '') {
              updateProject('title', updatedValue, id);
            }
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

export default Project;
