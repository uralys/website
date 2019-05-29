import PropTypes from 'prop-types';
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import ProjectCard from './project-card';
import style from './timeline.module.css';

const propTypes = {
  projects: Array.of(ProjectCard.propTypes)
};

const timelinePropTypes = {
  ...propTypes,
  images: PropTypes.array.isRequired
};

const extractAssets = images =>
  images.reduce((_assets, image) => {
    const projectPath = image.node.absolutePath.split('images/projects/')[1];
    if (!projectPath) {
      return _assets;
    }

    const imageName = image.node.base;
    const imageType = image.node.base.split('.')[0];
    const projectName = projectPath.split('/')[0];

    return {
      ..._assets,
      [projectName]: {
        ..._assets[projectName],
        [imageType]: image.node.childImageSharp.fluid
      }
    };
  }, {});

const Timeline = ({ projects, images }) => {
  const assets = extractAssets(images);

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

          if (!assets[project.id]) {
            throw new Error(`missing assets for project ${project.id}`);
          }

          return (
            <div className={style.element}>
              <ProjectCard
                key={project.id}
                project={project}
                assets={assets[project.id]}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const TimelineImageLoader = props => (
  <StaticQuery
    query={graphql`
      query {
        projectImages: allFile(
          filter: { sourceInstanceName: { eq: "images" } }
        ) {
          edges {
            node {
              base
              absolutePath
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Timeline images={data.projectImages.edges} {...props} />}
  />
);

TimelineImageLoader.prototypes = propTypes;
Timeline.prototypes = timelinePropTypes;

export default TimelineImageLoader;
