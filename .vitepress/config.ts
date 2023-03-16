import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Vim Mastery',
  description: 'A comprehensive guide to mastering Vim.',

  srcDir: 'src',
  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    editLink: {
      pattern: 'https://github.com/Hongbusi/vim-mastery/edit/main/src/:path',
      text: 'Edit this page on GitHub',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Hongbusi/vim-mastery' },
      { icon: 'twitter', link: 'https://twitter/Hongbusi' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Hongbusi',
    },
  },
})
