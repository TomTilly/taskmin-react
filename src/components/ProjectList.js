import React from 'react';
import { ReactComponent as Plus } from 'bootstrap-icons/icons/plus.svg';
import Project from './Project';
import IconButton from './IconButton';
import { themeColors } from '../utilities';
import '../styles/ProjectList.css';

function ProjectList({
  projects,
  activeProject,
  setActiveProjectId,
  activePanel,
  setActivePanel,
  addProject,
  updateProject,
  removeProject,
}) {
  let classes = 'ProjectList';
  if (activePanel === 'projects') {
    classes += ' ProjectList--active';
  }

  return (
    <section className={classes}>
      <header className="ProjectList__header">
        <h2 className="ProjectList__title">My Projects</h2>
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
        <ul className="ProjectList__list">
          {projects.map((project) => (
            <Project
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
            </Project>
          ))}
        </ul>
      ) : (
        <p className="ProjectList__empty-notification">
          No projects to show. Click on the "plus" icon above to create one!
        </p>
      )}
    </section>
  );
}

export default ProjectList;
