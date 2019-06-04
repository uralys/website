import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Image from '../components/image';

const PROJECT = 'phantoms';

const Intro = ({ title, subtitle, info }) => (
  <div>
    <p>{title}</p>
    <p>{subtitle}</p>
    <Image projectId={PROJECT} assetId="cover" />
    <p>{info}</p>
  </div>
);

const Section = ({ section }) => {
  switch (section.type) {
    case 'title':
      return <Image projectId={PROJECT} assetId="title" />;
    case 'intro':
      return (
        <Intro
          title={section.title}
          subtitle={section.subtitle}
          info={section.info}
        />
      );
    case 'paragraph':
      return <p>{section.value}</p>;
    case 'html':
      return <p dangerouslySetInnerHTML={{ __html: section.value }} />;
    default:
      return <p>todo: {section.type}</p>;
  }
};

const PhantomsPage = ({ data }) => {
  const details = data.allPhantomsDetailsYaml.edges.map(edge => edge.node);
  return (
    <Layout>
      <SEO
        title="Uralys - Phantoms"
        keywords={['gatsby', 'games', 'uralys', 'phantoms']}
      />
      {details.map(section => (
        <Section section={section} />
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
          title
          subtitle
          info
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
