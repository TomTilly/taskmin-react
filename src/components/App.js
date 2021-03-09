import React from 'react';
import ProjectsSidebar from './ProjectsSidebar';
import TaskList from './TaskList';
import { PROJECTS } from '../projects';

function App() {
  return <main className="App">
    <ProjectsSidebar projects={PROJECTS} />
    <TaskList project={PROJECTS[3]} />
  </main>
}

export default App;
