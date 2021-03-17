import React from 'react';
import useToggleState from '../hooks/useToggleState';
import CustomCheckbox from './CustomCheckbox';
import LineItemButtons from './LineItemButtons';
import LineItemForm from './LineItemForm';
import '../styles/TaskListItem.css';

function TaskListItem({
  isNested,
  children,
  isComplete,
  label,
  updateTask,
  taskId,
  projectId,
  toggleComplete,
  parentTaskId,
}) {
  const [isEditing, toggle] = useToggleState(false);
  return (
    <li className="TaskListItem">
      {isEditing ? (
        <LineItemForm
          name={label}
          onSubmit={(updatedValue) => {
            updateTask(updatedValue, taskId, parentTaskId);
            toggle();
          }}
        />
      ) : (
        <>
          <CustomCheckbox
            label={label}
            isComplete={isComplete}
            taskId={taskId}
            projectId={projectId}
            updateTask={updateTask}
            toggleComplete={toggleComplete}
            parentTaskId={parentTaskId}
          />
          <LineItemButtons edit={toggle} remove move />
          {children}
        </>
      )}
    </li>
  );
}

export default TaskListItem;
