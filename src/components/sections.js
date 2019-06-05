import React from 'react';
import PropTypes from 'prop-types';
import Image from '../components/image';
import style from './sections.module.css';

const Images = ({ projectId, images }) => (
  <div className={style.images}>
    {images.map(({ asset, style: imageStyle }) => (
      <Image
        key={`${projectId}-${asset}`}
        style={imageStyle}
        projectId={projectId}
        assetId={asset}
      />
    ))}
  </div>
);

const Intro = ({ projectId, title, subtitle, info, asset }) => (
  <>
    <p className={style.introTitle}>{title}</p>
    <p>{subtitle}</p>
    <Image projectId={projectId} assetId={asset} />
    <p className={style.introInfo}>{info}</p>
  </>
);

const Section = ({ projectId, section }) => {
  switch (section.type) {
    case 'images':
      return <Images projectId={projectId} images={section.images} />;
    case 'intro':
      return (
        <Intro
          projectId={projectId}
          title={section.title}
          subtitle={section.subtitle}
          info={section.info}
          asset={section.asset}
        />
      );
    case 'title':
      return <h1>{section.value}</h1>;
    case 'paragraph':
      return <p>{section.value}</p>;
    case 'html':
      return <p dangerouslySetInnerHTML={{ __html: section.value }} />;
    case 'video':
      return (
        <iframe
          width="648px"
          height="400px"
          src={section.url}
          frameBorder={0}
          allowFullScreen
        />
      );
    default:
      return <p>todo: {section.type}</p>;
  }
};

const Sections = ({ projectId, details }) => (
  <div className={style.sections}>
    {details.map((section, index) => (
      <div key={`section-${index}`} className={style.section}>
        <Section projectId={projectId} section={section} />
      </div>
    ))}
  </div>
);

Sections.propTypes = {
  projectId: PropTypes.string.isRequired,
  details: PropTypes.array.isRequired
};

export default Sections;
