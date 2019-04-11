module.exports = {
  base: '/vuepress/',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/img/logo.png' }]
  ],
  title: 'VuePress',
  description: '使用vuepress的个人主页',
  markdown: {
    lineNumbers: false, // 默认显示行号
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/home/' },
      { text: 'Compatible', link: '/compatible/' },
      { text: 'Method', link: '/method/' },
      { text: 'Github', link: 'https://google.com' },
    ],
    sidebar: {
      // fallback
      '/home/': [
        ['', '首页']
        // {
        //   title: '首页',
        //   collapsable: false,
        //   children: [
        //     ['', '首页'],
        //   ]
        // },
      ],
      '/compatible/': [
        {
          title: '兼容汇总',
          collapsable: false,
          children: [
            ['mouse', '鼠标滚轮在各个浏览器的兼容问题'],
          ]
        },
      ],
      '/method/': [
        {
          title: 'Math',
          collapsable: false,
          children: [
            ['Math/trunc', 'trunc()去除小数（es6新增）'],
            ['Math/sign', 'sign()判断征服（es6新增）'],
          ]
        },
        {
          title: 'Array',
          collapsable: false,
          children: [
            ['Array/bianping', '数组扁平化'],
          ]
        },
      ],
    },
    sidebarDepth: 0,   //侧边栏提取深度 0-不提取 1-提取H1和H2 2-提取H1 H2 H3 
    searchMaxSuggestions: 10, //搜索默认最大十条
    lastUpdated: 'Last Updated', // string | boolean
    serviceWorker: {
      updatePopup: true, // Boolean | Object, 默认值是 undefined. 允许热更新
      // 如果设置为 true, 默认的文本配置将是: 
      updatePopup: {
        message: "New content is available.",
        buttonText: "Refresh"
      }
    }

  },
  markdown: {
    lineNumbers: false, // 默认显示行号
  },

}
