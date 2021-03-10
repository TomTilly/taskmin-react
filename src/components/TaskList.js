import React from 'react';
import TaskListItem from './TaskListItem';
import '../styles/TaskList.css';

function TaskList({ project }) {
  const constructListItem = (task) => {
    if (task.subItems) {
      if (task.subItems.length) {
        return (
          <TaskListItem isComplete={task.isComplete} key={task.id}>
            {task.label}
            <ul className="TaskLineItem__SubList">
              {task.subItems.map(constructListItem)}
            </ul>
          </TaskListItem>
        );
      }
      return (
        <TaskListItem isComplete={task.isComplete} key={task.id}>
          {task.label}
        </TaskListItem>
      );
    }
    return (
      <TaskListItem isNested isComplete={task.isComplete} key={task.id}>
        {task.label}
      </TaskListItem>
    );
  };
  return (
    <section className="TaskList">
      <h1>{project.title}</h1>
      <ul className="TaskList__ul">{project.tasks.map(constructListItem)}</ul>
    </section>
  );
}

export default TaskList;
