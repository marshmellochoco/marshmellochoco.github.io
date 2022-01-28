const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
    const { data } = await graphql(`
        query {
            allContentfulWork(sort: { fields: date, order: DESC }) {
                nodes {
                    slug
                }
            }
        }
    `);

    data.allContentfulWork.nodes.forEach((node) => {
        actions.createPage({
            path: "/work/" + node.slug,
            component: path.resolve("./src/templates/work-details.js"),
            context: { slug: node.slug },
        });
    });
};
