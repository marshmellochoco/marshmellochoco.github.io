module.exports = {
    siteMetadata: {
        title: "marshchoco.github.io",
    },
    plugins: [
        "gatsby-plugin-emotion",
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `work`,
                path: `${__dirname}/src/work/`,
            },
        },
    ],
};
