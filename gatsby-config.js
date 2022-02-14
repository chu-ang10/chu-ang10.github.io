module.exports = {
  siteMetadata: {
    title: `Chanel Huang`,
    description: `Hey! I'm Chanel, a Singaporean adventurer.`,
    locale: `en`,
    author: `Chanel Huang`,
    siteUrl: `https://chu-ang10.github.io/`,
    formspreeEndpoint: "https://formspree.io/f/mrgjqdjv",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        showThemeLogo: false,
        basePath: "/",
        theme: "bright-green",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
