import PropTypes from 'prop-types';
import React from 'react';
import style from './highlight.module.css';

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
      <div
        className={style.image}
        data-cms-original-style="background-image: url(/images/demo/work-01.jpg)"
      />
    </div>

    <div className={style.contentWrap}>
      <div className={style.content}>
        <h2 className={style.title}>
          <a href="/project/write-it-down">{content.title}</a>
        </h2>
        <p className={style.subtitle}>{content.id}</p>
        <p className={style.description}>{content.description}</p>
      </div>
    </div>
  </div>
);

Highlight.propTypes = propTypes;
export default Highlight;
