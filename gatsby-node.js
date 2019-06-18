const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allProjectDetailsYaml {
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
  `).then(result => {
    result.data.allProjectDetailsYaml.edges.forEach(({ node }) => {
      const { page } = node;
      console.log(page);
      createPage({
        path: `/${page.id}`,
        component: path.resolve(`./src/pages/page.js`),
        context: page
      });
    });
  });
};
