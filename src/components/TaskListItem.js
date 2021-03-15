import React from 'react';
import CustomCheckbox from './CustomCheckbox';
import LineItemButtons from './LineItemButtons';
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
  return (
    <li className="TaskListItem">
      <CustomCheckbox
        label={label}
        isComplete={isComplete}
        taskId={taskId}
        projectId={projectId}
        updateTask={updateTask}
        toggleComplete={toggleComplete}
        parentTaskId={parentTaskId}
      />
      <LineItemButtons edit remove move />
      {children}
    </li>
  );
}

export default TaskListItem;
