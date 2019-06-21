import React from 'react';
import { Link, graphql } from 'gatsby';

import Hero from '../components/hero';
import Highlight from '../components/highlight';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Timeline from '../components/timeline';

const Highlights = ({ highlights }) =>
  highlights.map(highlight => (
    <Highlight key={highlight.id} content={highlight} />
  ));

const IndexPage = ({ data }) => {
  const highlights = data.allHighlightsYaml.edges.map(
    edge => edge.node.highlight
  );

  const projects = data.allProjectsYaml.edges.map(edge => edge.node.project);
  const pages = data.allPagesYaml.edges.map(edge => edge.node.page);

  return (
    <Layout>
      <SEO title="Uralys" keywords={[`gatsby`, `games`, `uralys`]} />
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
