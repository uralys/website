import React from 'react';
import Img from 'gatsby-image';
import defaultStyle from './image.module.css';
import { Images } from './images-provider';

const Image = ({
  imageClassName,
  wrapperClassName,
  wrapperStyle = {},
  style = { position: 'unset' },
  projectId,
  assetId
}) => (
  <div
    className={wrapperClassName || defaultStyle.imageWrap}
    style={wrapperStyle}
  >
    <Images.Consumer>
      {images => {
        if (!images[projectId]) {
          throw new Error(`missing images for project ${projectId}`);
        }

        if (!images[projectId][assetId]) {
          throw new Error(`missing image ${assetId} for project ${projectId}`);
        }
        return (
          <Img
            style={style}
            className={imageClassName}
            fluid={images[projectId][assetId]}
          />
        );
      }}
    </Images.Consumer>
  </div>
);

export default Image;
