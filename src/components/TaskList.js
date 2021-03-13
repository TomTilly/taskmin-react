import React from 'react';
import { ReactComponent as Plus } from 'bootstrap-icons/icons/plus.svg';
import TaskListItem from './TaskListItem';
import '../styles/TaskList.css';
import IconButton from './IconButton';
import Button from './Button';
import { themeColors } from '../utilities';

function TaskList({ project, setActivePanel }) {
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
      <header className="TaskList__header">
        <Button
          className="TaskList__button"
          onClick={(e) => {
            setActivePanel('projects');
          }}
        >
          Back To Projects
        </Button>
        <h1 className="TaskList__title">{project.title}</h1>
        <IconButton
          ariaLabel="Add Task to List"
          color={themeColors.green}
          background="#dddddd"
          size="lg"
        >
          <Plus />
        </IconButton>
      </header>
      <ul className="TaskList__ul">{project.tasks.map(constructListItem)}</ul>
    </section>
  );
}

export default TaskList;
