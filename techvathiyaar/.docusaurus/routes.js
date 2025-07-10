import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/techvathiyaar/blog',
    component: ComponentCreator('/techvathiyaar/blog', '106'),
    exact: true
  },
  {
    path: '/techvathiyaar/blog/archive',
    component: ComponentCreator('/techvathiyaar/blog/archive', '03b'),
    exact: true
  },
  {
    path: '/techvathiyaar/blog/authors',
    component: ComponentCreator('/techvathiyaar/blog/authors', 'e76'),
    exact: true
  },
  {
    path: '/techvathiyaar/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/techvathiyaar/blog/authors/all-sebastien-lorber-articles', 'bfa'),
    exact: true
  },
  {
    path: '/techvathiyaar/blog/authors/yangshun',
    component: ComponentCreator('/techvathiyaar/blog/authors/yangshun', 'afb'),
    exact: true
  },
  {
    path: '/techvathiyaar/blog/first-blog-post',
    component: ComponentCreator('/techvathiyaar/blog/first-blog-post', '8b0'),
    exact: true
  },
  {
    path: '/techvathiyaar/blog/long-blog-post',
    component: ComponentCreator('/techvathiyaar/blog/long-blog-post', '16f'),
    exact: true
  },
  {
    path: '/techvathiyaar/blog/mdx-blog-post',
    component: ComponentCreator('/techvathiyaar/blog/mdx-blog-post', 'ecb'),
    exact: true
  },
  {
    path: '/techvathiyaar/blog/tags',
    component: ComponentCreator('/techvathiyaar/blog/tags', 'f5c'),
    exact: true
  },
  {
    path: '/techvathiyaar/blog/tags/docusaurus',
    component: ComponentCreator('/techvathiyaar/blog/tags/docusaurus', 'a9d'),
    exact: true
  },
  {
    path: '/techvathiyaar/blog/tags/facebook',
    component: ComponentCreator('/techvathiyaar/blog/tags/facebook', '137'),
    exact: true
  },
  {
    path: '/techvathiyaar/blog/tags/hello',
    component: ComponentCreator('/techvathiyaar/blog/tags/hello', '21d'),
    exact: true
  },
  {
    path: '/techvathiyaar/blog/tags/hola',
    component: ComponentCreator('/techvathiyaar/blog/tags/hola', '71f'),
    exact: true
  },
  {
    path: '/techvathiyaar/blog/welcome',
    component: ComponentCreator('/techvathiyaar/blog/welcome', '9c4'),
    exact: true
  },
  {
    path: '/techvathiyaar/markdown-page',
    component: ComponentCreator('/techvathiyaar/markdown-page', '3e5'),
    exact: true
  },
  {
    path: '/techvathiyaar/docs',
    component: ComponentCreator('/techvathiyaar/docs', '356'),
    routes: [
      {
        path: '/techvathiyaar/docs',
        component: ComponentCreator('/techvathiyaar/docs', '5c6'),
        routes: [
          {
            path: '/techvathiyaar/docs',
            component: ComponentCreator('/techvathiyaar/docs', '7c5'),
            routes: [
              {
                path: '/techvathiyaar/docs/about',
                component: ComponentCreator('/techvathiyaar/docs/about', '124'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/techvathiyaar/docs/api-docs',
                component: ComponentCreator('/techvathiyaar/docs/api-docs', '0e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/techvathiyaar/docs/blogging',
                component: ComponentCreator('/techvathiyaar/docs/blogging', '2ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/techvathiyaar/docs/category/tutorial---basics',
                component: ComponentCreator('/techvathiyaar/docs/category/tutorial---basics', '475'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/techvathiyaar/docs/category/tutorial---extras',
                component: ComponentCreator('/techvathiyaar/docs/category/tutorial---extras', '74a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/techvathiyaar/docs/content-strategy',
                component: ComponentCreator('/techvathiyaar/docs/content-strategy', 'b18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/techvathiyaar/docs/intro',
                component: ComponentCreator('/techvathiyaar/docs/intro', '34b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/techvathiyaar/docs/monetization',
                component: ComponentCreator('/techvathiyaar/docs/monetization', '598'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/techvathiyaar/docs/multimedia',
                component: ComponentCreator('/techvathiyaar/docs/multimedia', '1c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/techvathiyaar/docs/technical-writing',
                component: ComponentCreator('/techvathiyaar/docs/technical-writing', 'a13'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/techvathiyaar/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/techvathiyaar/docs/tutorial-basics/congratulations', '17e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/techvathiyaar/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/techvathiyaar/docs/tutorial-basics/create-a-blog-post', '419'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/techvathiyaar/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/techvathiyaar/docs/tutorial-basics/create-a-document', '906'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/techvathiyaar/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/techvathiyaar/docs/tutorial-basics/create-a-page', 'f75'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/techvathiyaar/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/techvathiyaar/docs/tutorial-basics/deploy-your-site', '295'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/techvathiyaar/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/techvathiyaar/docs/tutorial-basics/markdown-features', '1a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/techvathiyaar/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/techvathiyaar/docs/tutorial-extras/manage-docs-versions', 'd2a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/techvathiyaar/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/techvathiyaar/docs/tutorial-extras/translate-your-site', '7b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/techvathiyaar/docs/ux-writing',
                component: ComponentCreator('/techvathiyaar/docs/ux-writing', 'e2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/techvathiyaar/',
    component: ComponentCreator('/techvathiyaar/', '9da'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
