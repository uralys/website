import PropTypes from 'prop-types';
import React from 'react';
import style from './project-card.module.css';
import Icon from './icon';
import Image from './image';

const propTypes = {
  project: {
    category: PropTypes.string,
    id: PropTypes.string,
    location: PropTypes.string,
    title: PropTypes.string,
    roles: PropTypes.arrayOf(PropTypes.string),
    dates: PropTypes.string,
    techno: PropTypes.arrayOf(PropTypes.string),
    duration: PropTypes.string
  },
  assets: PropTypes.object
};

const ProjectCard = ({ project, assets }) => (
  <div className={style.project}>
    <Image
      className={style.imageHeader}
      asset={assets.logo}
      projectId={project.id}
    />

    <div className={style.details}>
      <h3 className={style.title}>{project.title}</h3>
      <p className={style.description}>{project.description}</p>
      {/* <p className={style.roles}>
        {project.roles.map(role => (
          <p className={style.role}>{role}</p>
        ))}
      </p>
      <p className={style.technos}>
        {project.technos.map(techno => (
          <p className={style.techno}>{techno}</p>
        ))}
      </p> */}
    </div>

    <Icon fill="#ededed" className={style.icon} category={project.category} />
  </div>
);

ProjectCard.propTypes = propTypes;
export default ProjectCard;
