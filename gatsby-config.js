module.exports = {
  siteMetadata: {
    siteTitle: `Use pandas`,
    defaultTitle: `Use pandas`,
    siteTitleShort: `Use pandas`,
    siteDescription: `Easy to use Python pandas recipes. Built by Kenneth Cassel`,
    siteUrl: `https://www.usepandas.com`,
    siteAuthor: `@kenneth-cassel`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/kennethcassel/usepandas`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rocketdocs.netlify.com`,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://deliberatepython.us17.list-manage.com/subscribe/post?u=282671e49dad5fc03aecc5b9d&amp;id=dcd57177ff", // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    `gatsby-plugin-offline`,
    "gatsby-plugin-styled-components",
  ],
};
