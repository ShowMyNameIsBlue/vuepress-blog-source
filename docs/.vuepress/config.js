const { defaultTheme } = require('@vuepress/theme-default')
const { resolve } = require('path')
module.exports = {
  locales: 'zh-CN',
  title: '小刚的博客',
  public: resolve(__dirname, '../static'),
  head: [
    ['link', { rel: 'icon', href: '/logo/avatar.png' }]
  ],
  dest: resolve(__dirname, '../../dist'),
  description: '小刚的个人博客',
  theme: defaultTheme({
    logo: '/logo/avatar.png',
    navbar: [
      // NavbarItem
      {
        text: '首页',
        link: '/',
      }, {
        text: '标签',
        link: '/tags/',
      }, {
        text: '分类',
        link: '/categories/',
      }, {
        text: '归档',
        link: '/archives/',
      }, {
        text: '友链',
        link: '/friends/',
      },
      {
        text: '关于',
        link: '/about/',
      },
    ],
    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    sidebar: {
      // SidebarItem
      '/firends': [{
        text: '关于',
        link: "/about"
      }]
    },
    editLink: false,
    editLinkText: "编辑此页",
    lastUpdatedText: "上次更新",
    repo: 'vuejs/vuepress',

  }),
}