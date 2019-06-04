import VisibilitySensor from 'react-visibility-sensor';
import PropTypes from 'prop-types';
import React from 'react';
import style from './project-card.module.css';
import Icon from './icon';
import Image from './image';
import classnames from 'classnames';

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
  }
};

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.onVisibilitySensorChange = this.onVisibilitySensorChange.bind(this);
    this.state = { visible: false };
  }

  onVisibilitySensorChange(isVisible) {
    if (this.state.visible !== isVisible) {
      this.setState({ visible: isVisible });
    }
  }

  render() {
    const { project } = this.props;
    return (
      <VisibilitySensor
        onChange={this.onVisibilitySensorChange}
        partialVisibility
      >
        <a
          href={`/${project.id}`}
          className={classnames([
            style.project,
            this.state.visible ? style.show : style.hide
          ])}
        >
          <Image
            className={style.imageHeader}
            projectId={project.id}
            assetId="logo"
          />

          <div className={style.details}>
            <h3 className={style.title}>{project.title}</h3>
            <p className={style.description}>{project.description}</p>
          </div>

          {project.links && (
            <div className={style.links}>
              {project.links.map(({ type, url }) => (
                <a
                  className={style.link}
                  target="_blank"
                  key={`${project.id}-link-${type}`}
                  href={url}
                >
                  <Icon
                    className={style.linkIcon}
                    fill="#fff"
                    category={type}
                  />
                </a>
              ))}
            </div>
          )}

          <Icon
            fill="#ededed"
            className={style.icon}
            category={project.category}
          />
        </a>
      </VisibilitySensor>
    );
  }
}

ProjectCard.propTypes = propTypes;
export default ProjectCard;
