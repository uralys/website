import PropTypes from 'prop-types';
import React from 'react';
import style from './highlights.module.css';
import Image from './image';

const propTypes = {
  content: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
  })
};

const Highlight = ({ content }) => (
  <div className={style.post}>
    <div className={style.imageWrap}>
      {content.image && (
        <Image
          style={{ position: 'unset' }}
          wrapperClassName={style.image}
          projectId="global"
          assetId={content.image}
        />
      )}
    </div>

    <div className={style.contentWrap}>
      <div className={style.content}>
        <h2 className={style.title}>
          <a href="/project/write-it-down">{content.title}</a>
        </h2>
        <p className={style.subtitle}>{content.id}</p>
        <p className={style.description}>{content.description}</p>
        {content.details && (
          <ul className={style.list}>
            {content.details.map(line => (
              <li>{line}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </div>
);

Highlight.propTypes = propTypes;

const Highlights = ({ highlights }) => (
  <div className={style.highlights}>
    {highlights.map(highlight => (
      <Highlight key={highlight.id} content={highlight} />
    ))}
  </div>
);

export default Highlights;
