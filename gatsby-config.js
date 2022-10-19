const dotenv = require("dotenv");

dotenv.config({ path: "src/api/.env" });

module.exports = {
  siteMetadata: {
    title: `Cotal - Connecting Talent`,
    description: `Cotal is where talents gather to reach a common goal, to connect with like minded people and join forces with one another.`,
    author: `@MTraveller`,
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
      resolve: `gatsby-plugin-styled-components`,
    },
    `gatsby-plugin-netlify`,
    "gatsby-plugin-vercel-deploy",
  ],
};
