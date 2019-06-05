import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Sections from '../components/sections';

const PhantomsPage = ({ data }) => {
  const details = data.allPhantomsDetailsYaml.edges.map(edge => edge.node);
  return (
    <Layout>
      <SEO
        title="Uralys - Phantoms"
        keywords={['gatsby', 'games', 'uralys', 'phantoms']}
      />
      <Sections projectId="phantoms" details={details} />
      <Link to="/timeline">timeline</Link>
    </Layout>
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
          info
          subtitle
          title
          type
          url
          value
          values
        }
      }
    }
  }
`;

export default PhantomsPage;
