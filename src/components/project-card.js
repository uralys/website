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
  },
  assets: PropTypes.object
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
    const { project, assets } = this.props;
    return (
      <VisibilitySensor
        onChange={this.onVisibilitySensorChange}
        partialVisibility
      >
        <a className={style.projectWrap} href={`/${project.id}`}>
          <div
            className={classnames([
              style.project,
              this.state.visible ? style.show : style.hide
            ])}
          >
            <Image
              className={style.imageHeader}
              asset={assets.logo}
              projectId={project.id}
            />

            <div className={style.details}>
              <h3 className={style.title}>{project.title}</h3>
              <p className={style.description}>{project.description}</p>
            </div>

            <Icon
              fill="#ededed"
              className={style.icon}
              category={project.category}
            />

            {project.links && (
              <div className={style.links}>
                {project.links.map(({ type, url }) => (
                  <a
                    style={
                      type === 'apple' || type === 'google'
                        ? {
                            width: '125px',
                            backgroundColor: '#fff'
                          }
                        : null
                    }
                    className={style.link}
                    target="_blank"
                    key={`${project.id}-link-${type}`}
                    href={url}
                  >
                    <Icon
                      style={{
                        width:
                          (type === 'apple' || type === 'google') && '100px'
                      }}
                      className={style.linkIcon}
                      fill={
                        type === 'apple' || type === 'google' ? '#123' : '#fff'
                      }
                      category={type}
                    />
                  </a>
                ))}
              </div>
            )}
          </div>
        </a>
      </VisibilitySensor>
    );
  }
}

ProjectCard.propTypes = propTypes;
export default ProjectCard;
