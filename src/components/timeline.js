import PropTypes from 'prop-types';
import React from 'react';

import ProjectCard from './project-card';
import style from './timeline.module.css';

const propTypes = {
  projects: Array.of(ProjectCard.propTypes),
  images: PropTypes.array.isRequired
};

const Timeline = ({ projects }) => (
  <div className={style.timelineWrap}>
    <div className={style.timeline}>
      {projects.map(project => {
        if (project.category === 'year') {
          return (
            <div key={`year-${project.id}`} className={style.year}>
              {project.id}
            </div>
          );
        }

        return (
          <div key={project.id} className={style.element}>
            <ProjectCard project={project} />
          </div>
        );
      })}
    </div>
  </div>
);

Timeline.prototypes = propTypes;

export default Timeline;
