import React from 'react';
import useToggleState from '../hooks/useToggleState';
import CustomCheckbox from './CustomCheckbox';
import LineItemButtons from './LineItemButtons';
import LineItemForm from './LineItemForm';
import '../styles/TaskListItem.css';

function TaskListItem({
  children,
  isComplete,
  label,
  updateTask,
  removeTask,
  id,
  toggleComplete,
  isNested,
}) {
  const [isEditing, toggle] = useToggleState(label === '');
  return (
    <li className="TaskListItem">
      {isEditing ? (
        <LineItemForm
          name={label}
          placeholder="Enter your task name..."
          onSubmit={(updatedValue) => {
            if (updatedValue !== '') {
              updateTask('content', updatedValue, id);
            }
            toggle();
          }}
        />
      ) : (
        <>
          <CustomCheckbox
            label={label}
            isComplete={isComplete}
            id={id}
            toggleComplete={() => toggleComplete(id, isNested)}
          />
          <LineItemButtons
            edit={toggle}
            remove={() => removeTask(id, isNested)}
            move
          />
        </>
      )}
      {children}
    </li>
  );
}

export default TaskListItem;
