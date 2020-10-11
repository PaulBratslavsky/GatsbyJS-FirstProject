const path = require("path");

// CREATE PAGES DYNAMICALLY
exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions;
    const result = await graphql(`
        query GetProducts {
            products:allContentfulTheStore {
                nodes {
                slug
                }
            }
            }

    `);

    console.log('#######################');
    console.log(result);
    console.log('#######################');


    result.data.products.nodes.forEach((product) => {
        createPage({
            path: `/products/${product.slug}`,
            component: path.resolve(`src/templates/product-template.js`),
            context: {
                slug: product.slug
            }
        });
    });
}