import React from 'react';
import LineItemButtons from './LineItemButtons';

function ProjectLineItem({ color, children }) {
  return (
    <li className="ProjectLineItem" data-color={color} >
      {children}
      <LineItemButtons edit move remove />
    </li>
  )
}

export default ProjectLineItem;