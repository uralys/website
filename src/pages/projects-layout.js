import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ProjectLayout = ({ children, title, keywords }) => {
  return (
    <Layout>
      <SEO title={`Uralys - ${title}`} keywords={['uralys'].concat(keywords)} />
      {children}
      <Link to="/timeline">timeline</Link>
    </Layout>
  );
};

export default ProjectLayout;
