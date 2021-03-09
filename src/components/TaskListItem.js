import React from 'react'

function TaskLineItem({ isNested, children, isComplete, hasChildren}) {
  return (
    <li className="TaskLineItem">
      {children}
    </li>
  )
}

export default TaskLineItem;