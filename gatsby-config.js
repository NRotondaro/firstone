/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Simply Recipes",
    description: "Nice and clean recipes site",
    author: "@nikson",
    person: {
      name: "nikson",
      age: 21,
    },
    simpleData: ["item1", "item2"],
    complexData: [
      { name: "nikson", age: 21 },
      { name: "rotondaro", age: 22 },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
}
