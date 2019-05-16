import React from 'react';
import { Link, graphql } from 'gatsby';

import Highlight from '../components/highlight';
import Image from '../components/image';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Highlights = ({ highlights }) =>
  data.allHighlightsYaml.edges.map(edge => <Highlight content={edge.node.highlight} />);

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Uralys" keywords={[`gatsby`, `games`, `uralys`]} />
    <Highlights highlights={data} />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export const query = graphql`
  query {
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
