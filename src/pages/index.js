import React from 'react';
import { graphql } from 'gatsby';

import Hero from '../components/hero';
import Highlights from '../components/highlights';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Timeline from '../components/timeline';

const A = ({ name, path }) => (
  <a
    style={{
      color: 'white',
      padding: '20px'
    }}
    href={path}
  >
    {name}
  </a>
);

const IndexPage = ({ data }) => {
  const highlights = data.allHighlightsYaml.edges.map(
    edge => edge.node.highlight
  );

  const projects = data.allProjectsYaml.edges.map(edge => edge.node.project);
  const pages = data.allPagesYaml.edges.map(edge => edge.node.page);

  return (
    <Layout>
      <SEO title="Uralys" keywords={[`gatsby`, `games`, `uralys`]} />
      <A path="kodo" name="/router/kodo" />
      <A path="spaceship " name="/router/exalt/spaceship/dis_N1VeAuHzI" />
      <A path="forest " name="/router/exalt/spaceship/dis_VJaNTEq0r" />
      <Hero />
      <Highlights highlights={highlights} />
      <Timeline projects={projects} pages={pages} />
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
            image
          }
        }
      }
    }
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
    allPagesYaml {
      edges {
        node {
          page {
            id
            title
            keywords
            sections {
              url
              type
              title
              timeline
              texts {
                type
                title
                subtitle
                paragraph
                list
                icon
                images {
                  asset
                  style {
                    width
                  }
                }
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
`;

export default IndexPage;
