import React from 'react';
import TaskListItem from './TaskListItem';

function TaskList( { project }) {
  const constructListItem = (task) => {
    if(task.subItems) {
      if(task.subItems.length) {
        return (
          <TaskListItem isComplete={task.isComplete}>
            {task.label}
            <ul className="TaskLineItem__SubList">
              {task.subItems.map(constructListItem)}
            </ul>
          </TaskListItem>
        )
      } else {
        return (
          <TaskListItem isComplete={task.isComplete}>{task.label}</TaskListItem>
        )
      }
    } else {
      return <TaskListItem isNested={true} isComplete={task.isComplete}>{task.label}</TaskListItem>
    }
  };
  return (
    <section className="TaskList">
      <h1>{project.title}</h1>
      <ul className="TaskList__ul">
        {project.tasks.map(constructListItem)}
      </ul>
    </section>
  )
}

export default TaskList;