import React from 'react';
import { ReactComponent as Plus } from 'bootstrap-icons/icons/plus.svg';
import TaskListItem from './TaskListItem';
import '../styles/TaskList.css';
import IconButton from './IconButton';
import Button from './Button';
import { themeColors } from '../utilities';

function TaskList({
  project,
  setActivePanel,
  updateTask,
  removeTask,
  toggleComplete,
  addTask,
}) {
  const constructListItem = (task, parentTaskId) => {
    if (task.subItems) {
      if (task.subItems.length) {
        return (
          <TaskListItem
            isComplete={task.isComplete}
            key={task.id}
            label={task.label}
            taskId={task.id}
            projectId={project.id}
            updateTask={updateTask}
            removeTask={removeTask}
            toggleComplete={toggleComplete}
          >
            <ul className="TaskListItem__subList">
              {task.subItems.map((subItem) =>
                constructListItem(subItem, task.id)
              )}
            </ul>
          </TaskListItem>
        );
      }
      return (
        <TaskListItem
          isComplete={task.isComplete}
          key={task.id}
          label={task.label}
          taskId={task.id}
          projectId={project.id}
          updateTask={updateTask}
          removeTask={removeTask}
          toggleComplete={toggleComplete}
        />
      );
    }
    // Subitems
    return (
      <TaskListItem
        isNested
        isComplete={task.isComplete}
        key={task.id}
        label={task.label}
        taskId={task.id}
        projectId={project.id}
        updateTask={updateTask}
        removeTask={removeTask}
        toggleComplete={toggleComplete}
        parentTaskId={parentTaskId}
      />
    );
  };

  const header = (
    <header
      className="TaskList__header"
      style={{
        borderBottomColor: project ? themeColors[project.color] : '#666',
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
      {project && (
        <IconButton
          ariaLabel="Add Task to List"
          color={themeColors.green}
          background="#dddddd"
          size="lg"
          handleClick={(e) => addTask()}
        >
          <Plus />
        </IconButton>
      )}
    </header>
  );

  return (
    <section className="TaskList">
      {header}
      {project && (
        <ul className="TaskList__ul">
          {project.tasks.length ? (
            project.tasks.map(constructListItem)
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
