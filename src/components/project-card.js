import VisibilitySensor from 'react-visibility-sensor';
import PropTypes from 'prop-types';
import React from 'react';
import style from './project-card.module.css';
import Icon from './icon';
import Image from './image';
import Sections from './sections';
import classnames from 'classnames';

const propTypes = {
  project: PropTypes.shape({
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

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.onVisibilitySensorChange = this.onVisibilitySensorChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = { visible: false, open: false };
  }

  onVisibilitySensorChange(isVisible) {
    if (this.state.visible !== isVisible) {
      this.setState({ visible: isVisible });
    }
  }

  onClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { project, sections } = this.props;
    return (
      <VisibilitySensor
        onChange={this.onVisibilitySensorChange}
        partialVisibility
      >
        <div
          className={classnames([
            style.project,
            this.state.visible ? style.show : style.hide
          ])}
        >
          <div
            className={classnames([
              style.summary,
              this.state.open && style.fixedSummary
            ])}
            onClick={sections && this.onClick}
          >
            <Image
              wrapperClassName={style.imageHeader}
              projectId={project.id}
              assetId="logo"
            />

            <div className={style.details}>
              <h3 className={style.title}>{project.title}</h3>
              <p className={style.description}>{project.description}</p>
            </div>

            <div className={style.links}>
              {project.links &&
                project.links.map(({ type, url }) => (
                  <a
                    className={style.link}
                    key={`${project.id}-link-${type}`}
                    href={url}
                  >
                    <div className={style.linkIcon}>
                      <Icon fill="#fff" category={type} />
                    </div>
                  </a>
                ))}
            </div>

            <div className={style.icon}>
              <Icon fill="#ededed" category={project.category} />
            </div>
          </div>
          {sections && (
            <div
              className={classnames([
                style.sections,
                this.state.open ? style.open : style.collapse
              ])}
            >
              <Sections projectId={project.id} details={sections} filter />
            </div>
          )}
        </div>
      </VisibilitySensor>
    );
  }
}

ProjectCard.propTypes = propTypes;
export default ProjectCard;
