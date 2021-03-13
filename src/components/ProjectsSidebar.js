import React from 'react';
import { ReactComponent as Plus } from 'bootstrap-icons/icons/plus.svg';
import ProjectListItem from './ProjectListItem';
import IconButton from './IconButton';
import { themeColors } from '../utilities';
import '../styles/ProjectsSidebar.css';

function ProjectsSidebar({
  projects,
  activeProject,
  setActiveProjectId,
  activePanel,
  setActivePanel,
}) {
  let classes = 'ProjectsSidebar';
  if (activePanel === 'projects') {
    classes += ' ProjectsSidebar--active';
  }
  return (
    <section className={classes}>
      <header className="ProjectsSidebar__header">
        <h2 className="ProjectsSidebar__title">My Projects</h2>
        <IconButton
          ariaLabel="Add Task to List"
          color={themeColors.green}
          hasBackground
          size="lg"
        >
          <Plus />
        </IconButton>
      </header>
      <ul className="ProjectsSidebar__project-list">
        {projects.map((project) => (
          <ProjectListItem
            key={project.id}
            id={project.id}
            color={project.color}
            isActive={activeProject === project.id}
            setActiveProjectId={setActiveProjectId}
            setActivePanel={setActivePanel}
          >
            {project.title}
          </ProjectListItem>
        ))}
      </ul>
    </section>
  );
}

export default ProjectsSidebar;
