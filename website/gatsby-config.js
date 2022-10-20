module.exports = {
  siteMetadata: {
    title: `Bautizo de Alicia`,
    description: `Invitación digital para bautizo de Alicia`,
    author: `Alexis Reyes & Emily Loredo`,
    siteUrl: `https://bautizoalicia.online/`,
    links: {
      confirmMessage: "https://api.whatsapp.com/send?phone=6871300611&text=Hola,%20quisiera%20confirmar%20mi%20asistencia%20al%20bautizo%20de%20Alicia.",
      ceremonyLocation: "https://goo.gl/maps/QUGqGU119DHuVeHW8",
      partyLocation: "https://goo.gl/maps/tzJhNJf35igehSVr7",
      giftTable: "https://mesaderegalos.liverpool.com.mx/milistaderegalos/51047977"
    }
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true
      }
    }
  ],
}
