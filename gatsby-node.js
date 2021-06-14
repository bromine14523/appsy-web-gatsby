/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 exports.createPages = async function ({ actions, graphql }) {
    // const { data } = await graphql(`  
    //     query {
    //     allStrapiRestaurant(filter: {locale: {eq: "pl"}}) {
    //         edges {
    //         node {
    //             id
    //             name
    //             description
    //         }
    //         }
    //     }
    //     }
    // `)

    ["en", "pl"].forEach(loc => {
      actions.createPage({
        path: loc,
        component: require.resolve(`./src/templates/locale.js`),
        context: { locale: loc },
      })
    })
  }
