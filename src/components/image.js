import React from 'react';
import Img from 'gatsby-image';
import defaultStyle from './image.module.css';
import { Images } from './images-provider';

const Image = ({ className, style = {}, projectId, assetId }) => (
  <div style={style} className={className || defaultStyle.imageWrap}>
    <Images.Consumer>
      {images => {
        if (!images[projectId]) {
          throw new Error(`missing images for project ${projectId}`);
        }

        if (!images[projectId][assetId]) {
          throw new Error(`missing image ${assetId} for project ${projectId}`);
        }
        return <Img fluid={images[projectId][assetId]} />;
      }}
    </Images.Consumer>
  </div>
);

export default Image;
