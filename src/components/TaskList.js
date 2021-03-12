import React from 'react';
import TaskListItem from './TaskListItem';
import '../styles/TaskList.css';

function TaskList({ project }) {
  const constructListItem = (task) => {
    if (task.subItems) {
      if (task.subItems.length) {
        return (
          <TaskListItem
            isComplete={task.isComplete}
            key={task.id}
            label={task.label}
          >
            <ul className="TaskListItem__subList">
              {task.subItems.map(constructListItem)}
            </ul>
          </TaskListItem>
        );
      }
      return (
        <TaskListItem
          isComplete={task.isComplete}
          key={task.id}
          label={task.label}
        />
      );
    }
    return (
      <TaskListItem
        isNested
        isComplete={task.isComplete}
        key={task.id}
        label={task.label}
      />
    );
  };
  return (
    <section className="TaskList">
      <h1 className="TaskList__title">{project.title}</h1>
      <ul className="TaskList__ul">{project.tasks.map(constructListItem)}</ul>
    </section>
  );
}

export default TaskList;
