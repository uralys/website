import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import style from './timeline.module.css';

const propTypes = {
  projects: PropTypes.shape({
    category: PropTypes.string,
    id: PropTypes.string,
    location: PropTypes.string,
    title: PropTypes.string,
    roles: PropTypes.arrayOf(PropTypes.string),
    dates: PropTypes.string,
    techno: PropTypes.arrayOf(PropTypes.string),
    duration: PropTypes.string
  })
};

const timelinePropTypes = {
  ...propTypes,
  images: PropTypes.array.isRequired
};

const Timeline = ({ projects, images }) => {
  let _projects = Object.keys(projects).map(k => projects[k]);

  images.forEach(image => {
    const imagePath = image.node.childImageSharp.fluid.src;
    const splitters = imagePath.split('/');
    const imageName = splitters[splitters.length - 1].split('.')[0];

    const projectName = imageName.split('-timeline')[0];
    if (imageName !== projectName) {
      _projects = _projects.map(p => {
        if (p.id === projectName) {
          return {
            ...p,
            images: {
              ...p.images,
              timeline: image.node.childImageSharp.fluid
            }
          };
        } else {
          return p;
        }
      });
    }
  });

  console.log(_projects);

  return (
    <VerticalTimeline className={style.timeline}>
      {_projects.map(project => {
        return (
          <VerticalTimelineElement
            key={project.id}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#ff00ff'
                }}
              />
            }
          >
            <h3 className={style.title}>{project.title}</h3>
            <h4 className={style.location}>{project.location}</h4>
            <h4 className={style.dates}>{project.dates}</h4>
            {project.images && project.images.timeline && (
              <Img fluid={project.images.timeline} />
            )}
            <p className={style.description}>{project.description}</p>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
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
