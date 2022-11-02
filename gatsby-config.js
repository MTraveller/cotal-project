require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Cotal - Connecting Talent`,
    description: `Cotal is where talents gather to reach a common goal, to connect with like minded people and join forces with one another.`,
    author: `Mahmoud Tantouri`,
    siteUrl: `https://github.com/MTraveller`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
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
        name: `cotal`,
        short_name: `cotal`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/fff.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-layout`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
  ],
  flags: {
    DEV_SSR: true,
  },
};
