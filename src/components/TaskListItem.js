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
  taskId,
  projectId,
  toggleComplete,
  parentTaskId,
  isNewTask,
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
              updateTask(updatedValue, taskId, parentTaskId);
            }
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
          <LineItemButtons
            edit={toggle}
            remove={() => removeTask(taskId, parentTaskId)}
            move
          />
        </>
      )}
      {children}
    </li>
  );
}

export default TaskListItem;
