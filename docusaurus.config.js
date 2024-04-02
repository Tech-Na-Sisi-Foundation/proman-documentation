// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AAPH General System,',
  tagline: 'Documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'http://192.168.122.191',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'aaph-tanzania', // Usually your GitHub org/user name.
  projectName: 'aaph-reminder-ui', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'AAPH GS',
        logo: {
          alt: 'AAPH Logo',
          src: 'img/AAPHlogo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'userManualSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/aaph-tanzania',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Sitemap',
          //   items: [
          //     {
          //       label: 'User Manual',
          //       to: '/docs/intro',
          //     },
          //     {
          //       label: 'Developer Manual',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          {
            title: 'Media Links',
            items: [
              {
                label: 'AAPH Website',
                href: 'https://aaph.or.tz/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/aaph_africa/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/AAPH_Africa',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/profile.php?id=100079379110623',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/africa-academy-for-public-health-aaph/mycompany/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/aaph-tanzania',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AAPH GS. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
