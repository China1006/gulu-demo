module.exports = {
  base: '/gulu-demo/',
  title: '轱辘UI',
  description: '一个好用的UI框架',
  themeConfig: {
    nav: [
      {text: '主页', link: '/'}
    ],
    sidebar: [
      {
        title: '入门',
        children: ['/install/',
          '/get-started/']
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/tabs',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/popover',
          '/components/collapse'
        ],
      },

    ]
  }
}