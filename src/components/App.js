import React, { useState } from 'react';
import clonedeep from 'lodash/cloneDeep';
import ProjectsSidebar from './ProjectsSidebar';
import TaskList from './TaskList';
import '../styles/App.css';
import { SEED_DATA } from '../projects';

function App() {
  const [projects, setProjects] = useState(SEED_DATA);
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);
  const [activePanel, setActivePanel] = useState('projects');

  const updateProject = (propToUpdate, newValue, id) => {
    const newProjects = projects.map((project) => {
      if (project.id === id) {
        return { ...project, [propToUpdate]: newValue };
      }
      return project;
    });

    setProjects(newProjects);
  };

  const toggleComplete = (taskId, parentTaskId) => {
    const newProjects = clonedeep(projects);
    const projectToEdit = newProjects.find(
      (project) => activeProjectId === project.id
    );

    // If parentTaskId is present, task is a sub item
    if (parentTaskId) {
      const parentTask = projectToEdit.tasks.find(
        (task) => parentTaskId === task.id
      );
      const subItemToToggle = parentTask.subItems.find(
        (subItem) => taskId === subItem.id
      );
      subItemToToggle.isComplete = !subItemToToggle.isComplete;

      /* If sub item toggled to true, check if all sub items are checked.
       * If so, set parent task isComplete to true
       */
      if (parentTask.subItems.every((subItem) => subItem.isComplete)) {
        parentTask.isComplete = true;
      }

      // If sub item toggled to false, also set isComplete of parent to false
      if (!subItemToToggle.isComplete) {
        parentTask.isComplete = false;
      }

      // If parentTaskId is absent, task is not a sub item
    } else {
      const taskToToggle = projectToEdit.tasks.find(
        (task) => taskId === task.id
      );
      taskToToggle.isComplete = !taskToToggle.isComplete;
      taskToToggle.subItems.forEach((subItem) => {
        subItem.isComplete = taskToToggle.isComplete;
      });
    }

    setProjects(newProjects);
  };

  const updateTask = (propToUpdate, newValue, taskId) => {
    const newProjects = clonedeep(projects);
    const projectToEdit = newProjects.find(
      (project) => activeProjectId === project.id
    );
    const taskToEdit = projectToEdit.tasks.find((task) => taskId === task.id);
    taskToEdit[propToUpdate] = newValue;
    setProjects(newProjects);
  };

  return (
    <main className="App">
      <ProjectsSidebar
        projects={projects}
        activeProject={activeProjectId}
        setActiveProjectId={setActiveProjectId}
        activePanel={activePanel}
        setActivePanel={setActivePanel}
        updateProject={updateProject}
      />
      <TaskList
        project={projects.find((p) => p.id === activeProjectId)}
        setActivePanel={setActivePanel}
        updateTask={updateTask}
        toggleComplete={toggleComplete}
      />
    </main>
  );
}

export default App;
