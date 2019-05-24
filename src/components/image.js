import React from 'react';
import Img from 'gatsby-image';
import style from './image.module.css';

const Image = ({ className, asset }) => (
  <div className={className || style.imageWrap}>
    <Img fluid={asset} />
  </div>
);

export default Image;
