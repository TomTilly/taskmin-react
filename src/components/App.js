import React, { useState } from 'react';
import ProjectsSidebar from './ProjectsSidebar';
import TaskList from './TaskList';
import '../styles/App.css';
import { PROJECTS } from '../projects';

function App() {
  const [projects, updateProjects] = useState(PROJECTS);
  return (
    <main className="App">
      <ProjectsSidebar projects={projects} />
      <TaskList project={projects[3]} />
    </main>
  );
}

export default App;
