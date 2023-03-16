import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Vim Mastery',
  description: 'A comprehensive guide to mastering Vim.',

  srcDir: 'src',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', link: '/what-is-vim' },
    ],

    sidebar: [
      { text: '什么是 Vim？', link: '/what-is-vim' },
    ],

    editLink: {
      pattern: 'https://github.com/Hongbusi/vim-mastery/edit/main/src/:path',
      text: 'Edit this page on GitHub',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Hongbusi/vim-mastery' },
      { icon: 'twitter', link: 'https://twitter.com/Hongbusi' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Hongbusi',
    },
  },
})
