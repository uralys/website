import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Sections from '../components/sections';

const Page = ({ pageContext: { title, keywords, id, sections } }) => (
  <Layout>
    <SEO title={`Uralys - ${title}`} keywords={['uralys'].concat(keywords)} />
    <Sections projectId={id} details={sections} />;
    <Link to="/timeline">timeline</Link>
  </Layout>
);

export default Page;
