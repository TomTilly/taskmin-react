import React, { useState } from 'react';
import clonedeep from 'lodash/cloneDeep';
import ProjectList from './ProjectList';
import TaskList from './TaskList';
import '../styles/App.css';
import { SEED_DATA, createNewTask, createNewProject } from '../seed';

function App() {
  const [projects, setProjects] = useState(SEED_DATA.projects);
  const [tasks, setTasks] = useState(SEED_DATA.tasks);
  const [subtasks, setSubtasks] = useState(SEED_DATA.subtasks);
  const [projectOrder, setProjectOrder] = useState(SEED_DATA.projectOrder);
  const [activeProjectId, setActiveProjectId] = useState('project-1');
  const [activePanel, setActivePanel] = useState('projects');
  const tasksToShow = projects[activeProjectId]?.taskIds.map(
    (taskId) => tasks[taskId]
  );
  const activeProject = projects[activeProjectId];

  const updateProject = (propToUpdate, newValue, id) => {
    const newProjects = { ...projects };
    newProjects[id][propToUpdate] = newValue;
    setProjects(newProjects);
  };

  const addProject = () => {
    const newProject = createNewProject('');
    const { id } = newProject;
    setProjects({ ...projects, [id]: newProject });
  };

  const removeProject = (id) => {
    const newProjects = { ...projects };
    delete newProjects[id];
    setActiveProjectId(null);
    setProjects(newProjects);
  };

  const toggleComplete = (id, isSubtask = false) => {
    if (!isSubtask) {
      const newTasks = { ...tasks };
      const taskToUpdate = newTasks[id];
      taskToUpdate.isComplete = !taskToUpdate.isComplete;
      setTasks(newTasks);

      // If task has subtasks, set all subtask isComplete properties to be equal to the task's isComplete
      if (taskToUpdate.subtaskIds && taskToUpdate.subtaskIds.length > 0) {
        const newSubtasks = { ...subtasks };
        for (const key of Object.keys(newSubtasks)) {
          newSubtasks[key].isComplete = taskToUpdate.isComplete;
        }
        setSubtasks(newSubtasks);
      }
    } else {
      const newSubtasks = { ...subtasks };
      const subtaskToUpdate = newSubtasks[id];
      const parentTask = tasks[subtaskToUpdate.parentId];

      newSubtasks[id].isComplete = !newSubtasks[id].isComplete;
      setSubtasks(newSubtasks);

      // If subtask is marked incomplete, make sure parent task is also marked incomplete if it isn't already
      if (!newSubtasks[id].isComplete) {
        if (parentTask.isComplete) {
          const newTasks = { ...tasks };
          const taskToUpdate = newTasks[subtaskToUpdate.parentId];
          taskToUpdate.isComplete = false;
          setTasks(newTasks);
        }
        // If subtask is marked complete, check to see if every subtask is complete. If so, mark parent as complete
      } else if (
        parentTask.subtaskIds.every(
          (subtaskId) => newSubtasks[subtaskId].isComplete
        )
      ) {
        const newTasks = { ...tasks };
        const taskToUpdate = newTasks[subtaskToUpdate.parentId];
        taskToUpdate.isComplete = true;
        setTasks(newTasks);
      }
    }
  };

  const updateTask = (propToUpdate, newValue, id) => {
    const newTasks = { ...tasks };
    newTasks[id][propToUpdate] = newValue;

    setTasks(newTasks);
  };

  const removeTask = (id) => {
    const newTasks = { ...tasks };
    delete newTasks[id];

    setTasks(newTasks);
  };

  const addTask = (parentTaskId) => {
    let newProjects;
    // Add sub item
    if (parentTaskId) {
      newProjects = clonedeep(projects);
      // Find right project
      const projectToEdit = newProjects.find(
        (project) => project.id === activeProjectId
      );
      // Find right task
      const taskToEdit = projectToEdit.tasks.find(
        (task) => task.id === parentTaskId
      );
      // Add task to end of subItems of task
      taskToEdit.subItems.push(createNewTask('', true));
    } else {
      newProjects = projects.map((project) => {
        if (project.id === activeProjectId) {
          return { ...project, tasks: [createNewTask(''), ...project.tasks] };
        }
        return project;
      });
    }

    setProjects(newProjects);
  };

  return (
    <main className="App">
      <ProjectList
        projects={Object.values(projects)}
        activeProject={activeProjectId}
        setActiveProjectId={setActiveProjectId}
        activePanel={activePanel}
        setActivePanel={setActivePanel}
        addProject={addProject}
        updateProject={updateProject}
        removeProject={removeProject}
      />
      <TaskList
        tasks={tasksToShow}
        subtasks={subtasks}
        project={activeProject}
        setActivePanel={setActivePanel}
        updateTask={updateTask}
        removeTask={removeTask}
        toggleComplete={toggleComplete}
        addTask={addTask}
      />
    </main>
  );
}

export default App;
