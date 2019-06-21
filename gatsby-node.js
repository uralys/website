const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
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
  `).then(result => {
    result.data.allPagesYaml.edges.forEach(({ node }) => {
      const { page } = node;
      console.log(`  creating /${page.id}...`);
      createPage({
        path: `/${page.id}`,
        component: path.resolve(`./src/pages/page.js`),
        context: page
      });
    });
  });
};
