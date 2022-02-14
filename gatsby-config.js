module.exports = {
  siteMetadata: {
    title: `Chanel Huang`,
    description: `Hey! I'm Chanel, a Singaporean adventurer.`,
    author: `Chanel Huang`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        theme: "classic",
        basePath: "/",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
