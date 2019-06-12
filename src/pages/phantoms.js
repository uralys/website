import React from 'react';
import { graphql } from 'gatsby';
import ProjectLayout from './projects-layout';
import Sections from '../components/sections';

const Page = ({ data }) => {
  const details = data.allPhantomsDetailsYaml.edges.map(edge => edge.node);
  return (
    <ProjectLayout title="Phantoms" keywords={['phantoms, games']}>
      <Sections projectId="phantoms" details={details} />
    </ProjectLayout>
  );
};

export const query = graphql`
  query {
    allPhantomsDetailsYaml {
      edges {
        node {
          apple
          asset
          google
          images {
            asset
            style {
              width
            }
          }
          id
          info
          subtitle
          title
          texts {
            html
            icon
            list
            paragraph
            title
            type
          }
          type
          url
        }
      }
    }
  }
`;

export default Page;
