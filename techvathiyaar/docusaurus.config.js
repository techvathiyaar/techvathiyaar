// @ts-check

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tech Vathiyaar',
  tagline: 'Your Guide to Writing, Docs, and AI',
  url: 'https://techvathiyaar.github.io',
  baseUrl: '/techvathiyaar/',
  favicon: 'img/favicon.ico',
  organizationName: 'techvathiyaar', // GitHub org/user
  projectName: 'techvathiyaar', // GitHub repo
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  future: {
    v4: true,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/techvathiyaar/techvathiyaar/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/techvathiyaar/techvathiyaar/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Tech Vathiyaar',
      logo: {
        alt: 'Tech Vathiyaar Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/techvathiyaar/techvathiyaar',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Instagram',
              href: 'https://instagram.com/techvathiyaar',
            },
            {
              label: 'YouTube',
              href: 'https://youtube.com/@techvathiyaar',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/techvathiyaar/techvathiyaar',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tech Vathiyaar.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
