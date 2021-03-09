import React from 'react';
import CustomCheckbox from './CustomCheckbox';
import LineItemButtons from './LineItemButtons';

function TaskLineItem({ isNested, children, isComplete, hasChildren }) {
  return (
    <li className="TaskLineItem">
      <CustomCheckbox label={children} />
      <LineItemButtons />
    </li>
  );
}

export default TaskLineItem;
