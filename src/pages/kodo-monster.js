import React from 'react';
import { graphql } from 'gatsby';
import ProjectLayout from './projects-layout';
import Sections from '../components/sections';

const Page = ({ data }) => {
  const details = data.allKodoMonsterYaml.edges.map(edge => edge.node);
  return (
    <ProjectLayout title="Kodo: find the monster" keywords={['kodo', 'games']}>
      <Sections projectId="kodo-monster" details={details} />
    </ProjectLayout>
  );
};

export const query = graphql`
  query {
    allKodoMonsterYaml {
      edges {
        node {
          apple
          google
          id
          texts {
            html
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
