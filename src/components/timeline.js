import PropTypes from 'prop-types';
import React from 'react';

import ProjectCard from './project-card';
import style from './timeline.module.css';
import { Images } from './images-provider';

const propTypes = {
  projects: Array.of(ProjectCard.propTypes)
};

const timelinePropTypes = {
  ...propTypes,
  images: PropTypes.array.isRequired
};

const Timeline = ({ projects }) => (
  <div className={style.timelineWrap}>
    <div className={style.timeline}>
      {projects.map(project => {
        if (project.category === 'year') {
          return (
            <div key={project.id} className={style.year}>
              {project.id}
            </div>
          );
        }

        return (
          <div className={style.element}>
            <ProjectCard key={project.id} project={project} />
          </div>
        );
      })}
    </div>
  </div>
);

Timeline.prototypes = timelinePropTypes;

export default Timeline;
