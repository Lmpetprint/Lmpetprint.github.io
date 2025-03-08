import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({
  title: "Lmpetprint",
  titleTemplate: "一个普通技术宅的网站",
  description: "一个普通技术宅的网站",
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/src/个人/建立网站的初衷' }
    ],
    logo: 'logo.svg',
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },

    sidebar: [
      // {
      //   text: 'java基础',
      //   collapsed: false,
      //   items: [
      //     { text: '说一说你对同步和异步的理解?', link: '/Java基础/说一说你对同步和异步的理解' },
      //     { text: '线程和进程区别是什么?', link: '/Java基础/线程和进程区别是什么' },
      //     { text: '重载和重写的区别', link: '/Java基础/重载和重写的区别' },
      //     { text: '面向对象的三大特性?', link: '/Java基础/面向对象的三大特性' },
      //     { text: '什么是Java序列化,反序列化?', link: '/Java基础/什么是Java序列化,反序列化' },
      //   ]
      // }
      {
        text: '个人历程',
        items: [
          { text: '建立网站的初衷', link: '/src/个人/建立网站的初衷' },
          { text: '联系我', link: '/src/个人/联系我' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'wechat', link: '/src/个人/联系我' },
      { icon: 'github', link: 'https://github.com/Lmpetprint' },
      
    ]
  }
})
