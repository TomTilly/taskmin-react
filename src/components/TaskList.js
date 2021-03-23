import React from 'react';
import { ReactComponent as Plus } from 'bootstrap-icons/icons/plus.svg';
import TaskListItem from './TaskListItem';
import '../styles/TaskList.css';
import IconButton from './IconButton';
import Button from './Button';
import { themeColors } from '../utilities';

function TaskList({
  tasks,
  subtasks,
  project,
  setActivePanel,
  updateTask,
  removeTask,
  toggleComplete,
  addTask,
}) {
  const constructListItem = (task) => {
    if (task.subtaskIds) {
      if (task.subtaskIds.length) {
        return (
          <TaskListItem
            isComplete={task.isComplete}
            key={task.id}
            label={task.content}
            id={task.id}
            updateTask={updateTask}
            removeTask={removeTask}
            toggleComplete={toggleComplete}
          >
            <ul className="TaskListItem__subList">
              {task.subtaskIds.map((id) => constructListItem(subtasks[id]))}
            </ul>
          </TaskListItem>
        );
      }
      return (
        <TaskListItem
          isComplete={task.isComplete}
          key={task.id}
          label={task.content}
          id={task.id}
          updateTask={updateTask}
          removeTask={removeTask}
          toggleComplete={toggleComplete}
        />
      );
    }
    return (
      <TaskListItem
        isComplete={task.isComplete}
        key={task.id}
        label={task.content}
        id={task.id}
        updateTask={updateTask}
        removeTask={removeTask}
        toggleComplete={toggleComplete}
        isNested
      />
    );
  };

  const header = (
    <header
      className="TaskList__header"
      style={{
        borderBottomColor: project ? themeColors[project.color] : '#ddd',
      }}
    >
      <Button
        className="TaskList__button"
        onClick={(e) => {
          setActivePanel('projects');
        }}
        background="#dddddd"
      >
        Back To Projects
      </Button>
      <h1 className="TaskList__title">
        {project ? project.title : 'No project selected'}
      </h1>
      <IconButton
        ariaLabel="Add Task to List"
        color={themeColors.green}
        background="#dddddd"
        size="lg"
        handleClick={() => addTask()}
      >
        <Plus />
      </IconButton>
    </header>
  );

  return (
    <section className="TaskList">
      {header}
      {tasks && (
        <ul className="TaskList__ul">
          {tasks.length ? (
            tasks.map(constructListItem)
          ) : (
            <p className="TaskList__empty-notification">
              This project doesn't currently have any tasks. Click the plus
              button above to create one!
            </p>
          )}
        </ul>
      )}
    </section>
  );
}

export default TaskList;
