import React from 'react';
import { Link, graphql } from 'gatsby';

import Highlight from '../components/highlight';
import Layout from '../components/layout';
import Timeline from '../components/timeline';
import SEO from '../components/seo';

const Highlights = ({ highlights }) =>
  highlights.map(highlight => (
    <Highlight key={highlight.id} content={highlight} />
  ));

const IndexPage = ({ data }) => {
  const highlights = data.allHighlightsYaml.edges.map(
    edge => edge.node.highlight
  );
  const projects = data.allProjectsDevYaml.edges.map(edge => edge.node.project);

  return (
    <Layout>
      <SEO title="Uralys" keywords={[`gatsby`, `games`, `uralys`]} />
      {/* <Highlights highlights={highlights} /> */}
      <Timeline projects={projects} />
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export const query = graphql`
  query {
    allProjectsDevYaml {
      edges {
        node {
          project {
            category
            id
            location
            title
            roles
            technos
            dates
            description
          }
        }
      }
    }
    allHighlightsYaml {
      edges {
        node {
          highlight {
            id
            title
            description
          }
        }
      }
    }
  }
`;

export default IndexPage;
