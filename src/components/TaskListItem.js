import React from 'react';
import CustomCheckbox from './CustomCheckbox';
import LineItemButtons from './LineItemButtons';
import '../styles/TaskLineItem.css';

function TaskLineItem({ isNested, children, isComplete, hasChildren, label }) {
  return (
    <li className="TaskLineItem">
      <CustomCheckbox label={label} />
      <LineItemButtons edit remove move />
      {children}
    </li>
  );
}

export default TaskLineItem;
