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

const Highlight = ({ content, reverse = false }) => (
  <div className={reverse ? style.postReversed : style.post}>
    <div className={style.imageWrap}>
      {content.image && (
        <Image
          wrapperClassName={style.image}
          projectId="global"
          assetId={content.image}
        />
      )}
    </div>

    <div className={style.contentWrap}>
      <div className={style.content}>
        <h2 className={style.title}>{content.title}</h2>
        <p className={style.description}>{content.description}</p>
        {content.details && (
          <ul className={style.list}>
            {content.details.map(line => (
              <li className={style.line}>{line}</li>
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
    {highlights.map((highlight, index) => (
      <Highlight
        key={highlight.id}
        content={highlight}
        reverse={index % 2 === 1}
      />
    ))}
  </div>
);

export default Highlights;
