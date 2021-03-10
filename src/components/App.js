import React, { useState } from 'react';
import ProjectsSidebar from './ProjectsSidebar';
import TaskList from './TaskList';
import '../styles/App.css';
import { PROJECTS } from '../projects';

function App() {
  const [projects, setProjects] = useState(PROJECTS);
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);

  return (
    <main className="App">
      <ProjectsSidebar
        projects={projects}
        activeProject={activeProjectId}
        setActiveProjectId={setActiveProjectId}
      />
      <TaskList project={projects.find((p) => p.id === activeProjectId)} />
    </main>
  );
}

export default App;
