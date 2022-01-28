require("dotenv").config();

module.exports = {
    siteMetadata: {
        title: "marshchoco.github.io",
    },
    plugins: [
        "gatsby-plugin-emotion",
        `gatsby-transformer-remark`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `marshchoco`,
                start_url: `/`,
                icon: `src/images/favicon.png`,
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `2gseauehpdrp`,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
    ],
};
