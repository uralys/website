import React from 'react';
import { graphql } from 'gatsby';
import ProjectLayout from './projects-layout';
import Sections from '../components/sections';

const Page = ({ data }) => {
  const details = data.allLd44Yaml.edges.map(edge => edge.node);
  return (
    <ProjectLayout
      title="LD44"
      keywords={['ludum dare', 'ld44', 'games', 'prototype']}
    >
      <Sections projectId="ld44" details={details} />
    </ProjectLayout>
  );
};

export const query = graphql`
  query {
    allLd44Yaml {
      edges {
        node {
          id
          images {
            asset
            style {
              width
            }
          }
          texts {
            html
            list
            paragraph
            title
            icon
            type
          }
          type
        }
      }
    }
  }
`;

export default Page;
