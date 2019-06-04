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
  <Images.Consumer>
    {images => {
      return (
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

              if (!images[project.id]) {
                throw new Error(`missing images for project ${project.id}`);
              }

              return (
                <div className={style.element}>
                  <ProjectCard
                    key={project.id}
                    project={project}
                    assets={images[project.id]}
                  />
                </div>
              );
            })}
          </div>
        </div>
      );
    }}
  </Images.Consumer>
);

Timeline.prototypes = timelinePropTypes;

export default Timeline;
