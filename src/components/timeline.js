import React from 'react';

import ProjectCard from './project-card';
import style from './timeline.module.css';

const propTypes = {
  // eslint-disable-next-line react/forbid-foreign-prop-types
  projects: Array.of(ProjectCard.propTypes),
  pages: Array
};

const Timeline = ({ projects, pages }) => (
  <div className={style.timelineWrap}>
    <div className={style.timeline}>
      {projects.map(project => {
        const page = pages.find(page => page.id === project.id);
        if (project.category === 'year') {
          return (
            <div key={`year-${project.id}`} className={style.year}>
              {project.id}
            </div>
          );
        }

        return (
          <ProjectCard
            key={project.id}
            project={project}
            sections={page && page.sections}
          />
        );
      })}
    </div>
  </div>
);

Timeline.prototypes = propTypes;

export default Timeline;
