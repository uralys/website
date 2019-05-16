import PropTypes from 'prop-types';
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import style from './highlight.css';

const propTypes = {
  content: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
  })
};

const Highlight = ({ content }) => (
  <div class={style.post}>
    <div class={style.imageWrap}>
      <div
        class={style.image}
        data-cms-original-style="background-image: url(/images/demo/work-01.jpg)"
      />
    </div>

    <div class={style.contentWrap}>
      <div class={style.content}>
        <h2 class={style.title}>
          <a href="/project/write-it-down">{content.title}</a>
        </h2>
        <p class={style.subtitle}>{content.id}</p>
        <p class={style.description}>{content.description}</p>
      </div>
    </div>
  </div>
);

Highlight.propTypes = propTypes;
export default Highlight;
