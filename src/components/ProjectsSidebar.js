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
  addProject,
  updateProject,
  removeProject,
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
          background="#dddddd"
          size="lg"
          handleClick={addProject}
        >
          <Plus />
        </IconButton>
      </header>
      {projects.length ? (
        <ul className="ProjectsSidebar__project-list">
          {projects.map((project) => (
            <ProjectListItem
              key={project.id}
              id={project.id}
              color={project.color}
              isActive={activeProject === project.id}
              setActiveProjectId={setActiveProjectId}
              setActivePanel={setActivePanel}
              updateProject={updateProject}
              removeProject={removeProject}
            >
              {project.title}
            </ProjectListItem>
          ))}
        </ul>
      ) : (
        <p className="ProjectsSidebar__empty-notification">
          No projects to show. Click on the "plus" icon above to create one!
        </p>
      )}
    </section>
  );
}

export default ProjectsSidebar;
