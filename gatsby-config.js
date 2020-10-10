/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "My First Gatsby",
    description: "Learning about Gatsby JS and GraphQl",
    author: "Coding After Thirty",
    data: ["test 1", "test 2", "test 3"],
    person: {
      name: "Paul",
      age: 40,
    },
  },
  plugins: [`gatsby-plugin-styled-components`],
}
