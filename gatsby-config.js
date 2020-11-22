module.exports = {
  siteMetadata: {
    title: `Collaboration Science`,
    description: `Exploring the intersection of data science, collaboration, and consciousness.`,
    author: `matthewvilhauer@gmail.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      // plugin that transforms the docs (.md) files into html contents added and configured
       resolve:`gatsby-transformer-remark`,
       options:{
            commonmark: true,
            footnotes: true,
            pedantic: true,
            gfm: true,
       }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
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
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#168F97`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  pathPrefix: '/blog'
}
