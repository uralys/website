import React from 'react';
import { Link, graphql } from 'gatsby';

import Highlight from '../components/highlight';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Highlights = ({ highlights }) =>
  highlights.map(highlight => (
    <Highlight key={highlight.id} content={highlight} />
  ));

const IndexPage = ({ data }) => {
  const highlights = data.allHighlightsYaml.edges.map(
    edge => edge.node.highlight
  );
  return (
    <Layout>
      <SEO title="Uralys" keywords={[`gatsby`, `games`, `uralys`]} />
      <Highlights highlights={highlights} />
      <Link to="/phantoms">phantoms</Link>
      <Link to="/timeline">timeline</Link>
    </Layout>
  );
};

export const query = graphql`
  query {
    allHighlightsYaml {
      edges {
        node {
          highlight {
            id
            title
            description
            details
          }
        }
      }
    }
  }
`;

export default IndexPage;
