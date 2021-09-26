/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 exports.createPages = async function ({ actions, graphql }) {
    const languagesQuery = await graphql(`  
        query {
          allStrapiLanguage(filter: {isActive: {eq: true}}) {
            edges {
              node {
                name
              }
            }
          }
        }
    `);

    actions.createPage({
      path: '/',
      component: require.resolve(`./src/templates/locale.js`),
      context: { locale: "en" },
    });

    actions.createPage({
      path: '/contact',
      component: require.resolve(`./src/templates/contact-locale.js`),
      context: { locale: "en" },
    });

    languagesQuery.data.allStrapiLanguage.edges.forEach(loc => {

      actions.createPage({
        path: loc.node.name,
        component: require.resolve(`./src/templates/locale.js`),
        context: { locale: loc.node.name },
      });

      actions.createPage({
        path: loc.node.name + '/contact',
        component: require.resolve(`./src/templates/contact-locale.js`),
        context: { locale: loc.node.name },
      });

    });
}
