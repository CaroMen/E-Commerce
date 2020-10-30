require('dotenv').config();

module.exports = {
    plugins: [
        'gatsby-transfromer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: 'src/pages'
            }
        },
        {
            resolve: 'gatsby-source-shopify',
            options: {
                shopName: 'Modern By Francis',
                accessToken: 'e7fd1b5eef627c5aeac4ee7be2bc6801',
                apiVersion: "2020-10",
                includeCollections: ['shop']
            }
        }
    ]
};
