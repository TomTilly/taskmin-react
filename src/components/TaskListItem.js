import React from 'react';
import CustomCheckbox from './CustomCheckbox';
import LineItemButtons from './LineItemButtons';
import '../styles/TaskListItem.css';

function TaskListItem({ isNested, children, isComplete, hasChildren, label }) {
  return (
    <li className="TaskListItem">
      <CustomCheckbox label={label} />
      <LineItemButtons edit remove move />
      {children}
    </li>
  );
}

export default TaskListItem;
