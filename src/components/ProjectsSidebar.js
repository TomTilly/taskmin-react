import React from 'react';
import ProjectLineItem from './ProjectLineItem';
import '../styles/ProjectsSidebar.css';

function ProjectsSidebar({ projects, activeProject, setActiveProjectId }) {
  return (
    <section className="ProjectsSidebar">
      <h2 className="ProjectsSidebar__title">My Projects</h2>
      <ul className="ProjectsSidebar__project-list">
        {projects.map((project) => (
          <ProjectLineItem
            key={project.id}
            id={project.id}
            color={project.color}
            isActive={activeProject === project.id}
            setActiveProjectId={setActiveProjectId}
          >
            {project.title}
          </ProjectLineItem>
        ))}
      </ul>
    </section>
  );
}

export default ProjectsSidebar;
