import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const PhantomsPage = ({ data }) => {
  const details = data.allPhantomsDetailsYaml.edges.map(edge => edge.node);
  return (
    <Layout>
      <SEO
        title="Uralys - Phantoms"
        keywords={['gatsby', 'games', 'uralys', 'phantoms']}
      />
      {details.map(detail => (
        <p>{detail.type}</p>
      ))}
      <Link to="/timeline">timeline</Link>
    </Layout>
  );
};

export const query = graphql`
  query {
    allPhantomsDetailsYaml {
      edges {
        node {
          type
          subtitle
          google
          apple
          url
          from
          to
          value
          values
        }
      }
    }
  }
`;

export default PhantomsPage;
