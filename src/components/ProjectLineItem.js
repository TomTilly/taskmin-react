import React from 'react';
import LineItemButtons from './LineItemButtons';
import '../styles/ProjectLineItem.css';

function ProjectLineItem({ color, children }) {
  return (
    <li className="ProjectLineItem" data-color={color}>
      {children}
      <LineItemButtons edit move remove />
    </li>
  );
}

export default ProjectLineItem;
