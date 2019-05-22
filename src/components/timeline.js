import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import '../style/vertical-timeline-component.css';
import style from './timeline.module.css';

import { ReactComponent as SchoolIcon } from '../icons/school.svg';
import { ReactComponent as GamepadIcon } from '../icons/gamepad.svg';
import { ReactComponent as InternshipIcon } from '../icons/internship.svg';

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

const TimelineImage = ({ projectAssets, id }) => {
  if (!projectAssets[id] || !projectAssets[id].timeline) {
    return null;
  }

  return (
    <div className={style.imageWrap}>
      <Img fluid={projectAssets[id].timeline} />
    </div>
  );
};

const Icon = ({ category }) => {
  switch (category) {
    case 'school':
      return (
        <SchoolIcon
          style={{
            fill: '#ededed'
          }}
        />
      );

    case 'games':
      return (
        <GamepadIcon
          style={{
            width: '100%',
            height: '100%',
            fill: '#ededed',
            margin: 'auto',
            top: '10px',
            left: '10px'
          }}
        />
      );

    case 'internship':
      return (
        <InternshipIcon
          style={{
            width: '100%',
            height: '100%',
            fill: '#ededed',
            margin: 'auto',
            top: '10px',
            left: '10px'
          }}
        />
      );

    case 'partnership':
    case 'job':
    default:
      return null;
  }
};

const Timeline = ({ projects, images }) => {
  let _projects = Object.keys(projects).map(k => projects[k]);
  const projectAssets = extractAssets(images);

  return (
    <VerticalTimeline className={style.timeline} layout="1-column">
      {_projects.map(project => {
        if (project.category === 'year') {
          return <div className={style.year}>{project.id}</div>;
        }

        return (
          <VerticalTimelineElement
            className={style.projectWrap}
            key={project.id}
            iconStyle={{ background: '#003b5f', color: '#fff' }}
            icon={
              <div className={style.iconWrap}>
                <Icon category={project.category} />
              </div>
            }
          >
            <h3 className={style.title}>{project.title}</h3>
            <p className={style.location}>{project.location}</p>
            <p className={style.dates}>{project.dates}</p>
            <TimelineImage projectAssets={projectAssets} id={project.id} />
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
