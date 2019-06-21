import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Timeline from '../components/timeline';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  const projects = data.allProjectsYaml.edges.map(edge => edge.node.project);
  return (
    <Layout>
      <SEO title="Uralys" keywords={[`games`, `uralys`]} />
      <Timeline projects={projects} />
    </Layout>
  );
};

export const query = graphql`
  query {
    allProjectsYaml {
      edges {
        node {
          project {
            category
            dates
            description
            id
            links {
              type
              url
            }
            location
            roles
            technos
            title
          }
        }
      }
    }
  }
`;

export default IndexPage;
