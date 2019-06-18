import React from 'react';
import PropTypes from 'prop-types';
import Image from '../components/image';
import style from './sections.module.css';

const Images = ({ projectId, images }) => (
  <div className={style.screenshots}>
    {images.map(({ asset, style: imageStyle }) => (
      <Image
        className={style.screenshot}
        key={`${projectId}-${asset}`}
        style={imageStyle}
        projectId={projectId}
        assetId={asset}
      />
    ))}
  </div>
);

const Intro = ({ projectId, title, subtitle, info, asset }) => (
  <div className={style.intro}>
    <p className={style.introTitle}>{title}</p>
    <p>{subtitle}</p>
    <Image projectId={projectId} assetId={asset} />
    <p className={style.introInfo}>{info}</p>
  </div>
);

const Stores = ({ google, apple }) => (
  <div className={style.storeButtons}>
    <a className={style.storeButton} href={apple} target="_blank">
      <Image
        className={style.storeButtonImage}
        projectId="global"
        assetId="appstore"
      />
    </a>
    <a className={style.storeButton} href={google} target="_blank">
      <Image
        className={style.storeButtonImage}
        projectId="global"
        assetId="playstore"
      />
    </a>
  </div>
);

const Icon = ({ icon }) => {
  const splitters = icon.split('/');
  const projectId = (splitters.length == 2 && splitters[0]) || 'global';
  const assetId = splitters[1] || splitters[0];

  return (
    <Image
      className={style.creditIcon}
      projectId={projectId}
      assetId={assetId}
    />
  );
};

const Texts = ({ projectId, texts, centered }) => (
  <>
    {texts.map(
      ({ paragraph, list, html, icon, images, title, type = 'default' }) => (
        <div className={centered ? style.centeredText : style.text}>
          {icon && <Icon icon={icon} />}
          {images && <Images projectId={projectId} images={images} />}
          {title && <h1 className={style.title}>{title}</h1>}
          {html && (
            <p
              className={style.paragraph}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          )}
          {paragraph && <p className={style.paragraph}>{paragraph}</p>}
          {list && (
            <ul className={style.list}>
              {list.map(line => (
                <li>{line}</li>
              ))}
            </ul>
          )}
        </div>
      )
    )}
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
    case 'stores':
      return <Stores google={section.google} apple={section.apple} />;
    case 'texts':
    case 'centeredText':
      return (
        <Texts
          projectId={projectId}
          texts={section.texts}
          centered={section.type === 'centeredText'}
        />
      );
    case 'video':
      return (
        <iframe
          className={style.video}
          width="648px"
          height="400px"
          src={section.url}
          frameBorder={0}
          allowFullScreen
        />
      );
    default:
      return (
        <p>
          <b>TODO</b>: {section.type}
        </p>
      );
  }
};

const Sections = ({ projectId, details }) => (
  <div className={style.sections}>
    {details.map((section, index) => (
      <div id={section.id} key={`section-${index}`} className={style.section}>
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
