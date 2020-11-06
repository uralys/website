module.exports = {
  siteMetadata: {
    title: `Uralys`,
    description: `Uralys games.`,
    author: `@chrisdugne`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-svgr`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `uralys.com`,
        short_name: `www`,
        start_url: `/`,
        background_color: `#1c2541`,
        theme_color: `#1c2541`,
        display: `minimal-ui`,
        icon: `src/images/global/logo-square.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-17389126-1',
      },
    },
  ],
};
