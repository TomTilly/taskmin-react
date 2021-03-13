import React, { useState } from 'react';
import ProjectsSidebar from './ProjectsSidebar';
import TaskList from './TaskList';
import '../styles/App.css';
import { PROJECTS } from '../projects';

function App() {
  const [projects, setProjects] = useState(PROJECTS);
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);
  const [activePanel, setActivePanel] = useState('projects');

  const updateProject = (updatedValue, id) => {
    const newProjects = projects.map((project) => {
      if (project.id === id) {
        return { ...project, title: updatedValue };
      }
      return project;
    });
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
      />
    </main>
  );
}

export default App;
