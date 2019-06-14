import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Sections from '../components/sections';

export const Pages = React.createContext({
  pages: {}
});

const Provider = ({ children, rawPages }) => {
  const pages = rawPages.reduce(
    (acc, edge) => ({
      ...acc,
      [edge.node.page.id]: edge.node.page.sections
    }),
    {}
  );
  return <Pages.Provider value={pages}>{children}</Pages.Provider>;
};

const ProjectLayout = ({ children, title, keywords }) => (
  <StaticQuery
    query={graphql`
      query {
        allProjectDetailsYaml {
          edges {
            node {
              page {
                id
                sections {
                  url
                  type
                  title
                  texts {
                    type
                    title
                    paragraph
                    list
                    icon
                    html
                    credit
                  }
                  subtitle
                  info
                  images {
                    asset
                    style {
                      width
                    }
                  }
                  id
                  google
                  asset
                  apple
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO
          title={`Uralys - ${title}`}
          keywords={['uralys'].concat(keywords)}
        />
        <Provider rawPages={data.allProjectDetailsYaml.edges}>
          {children}
        </Provider>
        <Link to="/timeline">timeline</Link>
      </Layout>
    )}
  />
);

const Page = ({ title, keywords, projectId }) => (
  <ProjectLayout title={title} keywords={keywords}>
    <Pages.Consumer>
      {pages => {
        const details = pages[projectId];
        return <Sections projectId={projectId} details={details} />;
      }}
    </Pages.Consumer>
  </ProjectLayout>
);

export default Page;
