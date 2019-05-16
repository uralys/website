import PropTypes from 'prop-types';
import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import style from './timeline.css';

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

const Timeline = ({ projects }) => (
  <VerticalTimeline>
    {projects.map(project => (
      <VerticalTimelineElement
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
      </VerticalTimelineElement>
    ))}
  </VerticalTimeline>
);

Timeline.prototypes = propTypes;
export default Timeline;
