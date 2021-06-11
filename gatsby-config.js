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
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `marshchoco`,
                start_url: `/`,
                icon: `src/images/favicon.png`,
            },
        },
    ],
};
