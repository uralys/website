import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

export const Images = React.createContext({
  images: {}
});

const extractAssets = images =>
  images.reduce((_assets, image) => {
    let path = image.node.absolutePath.split('images/projects/')[1];

    if (!path) {
      path = image.node.absolutePath.split('images/')[1];
    }

    if (!path) {
      return _assets;
    }

    const imageType = image.node.base.split('.')[0];
    const folder = path.split('/')[0];

    return {
      ..._assets,
      [folder]: {
        ..._assets[folder],
        [imageType]: image.node.childImageSharp.fluid
      }
    };
  }, {});

const Provider = ({ children, rawImages }) => {
  const images = extractAssets(rawImages);
  console.log(images);
  return <Images.Provider value={images}>{children}</Images.Provider>;
};

const ImagesLoader = props => (
  <StaticQuery
    query={graphql`
      query {
        projectImages: allFile(
          filter: { sourceInstanceName: { eq: "images" } }
        ) {
          edges {
            node {
              base
              absolutePath
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Provider rawImages={data.projectImages.edges} {...props} />
    )}
  />
);

export default ImagesLoader;
