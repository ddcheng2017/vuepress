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
      { text: 'Example', link: '/example/' },
      {
        text: 'Course',
        items: [
          { text: 'Flex布局', link: '/course/flex' },
          { text: 'Gird布局', link: '/course/gird' },
          { text: 'RegExp正则', link: '/course/RegExp' },
        ]
      },
      // { text: 'Github', link: 'https://google.com' },
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
        ['mouse', '鼠标滚轮在各个浏览器的兼容问题'],
        // {
        //   title: '兼容汇总',
        //   collapsable: false,
        //   children: [
        //     ['mouse', '鼠标滚轮在各个浏览器的兼容问题'],
        //   ]
        // },
      ],
      '/method/': [
        ['browserInfo', 'js判断浏览器方法'],

        {
          title: 'Math',
          collapsable: false,
          children: [
            ['Math/trunc', 'trunc()去除小数（es6新增）'],
            ['Math/sign', 'sign()判断数字正负（es6新增）'],
          ]
        },
        {
          title: 'Array',
          collapsable: false,
          children: [
            ['Array/flat', '数组扁平化'],
            ['Array/unique', '数组去重'],
          ]
        },
        {
          title: 'Object',
          collapsable: false,
          children: [
            ['Object/copy', '对象的拷贝（深拷贝和浅拷贝）'],
          ]
        },
      ],
      '/example/': [
        ['scrollBar', '浏览器自定义滚动条'],
      ],
      // '/course/': [
      //   ['flex', 'Flex布局'],
      //   ['gird', 'Gird布局'],
      //   ['RegExp', 'js中正则的使用和基本知识回顾'],
      // ]
    },
    sidebarDepth: 0,   //侧边栏提取深度 0-不提取 1-提取H1和H2 2-提取H1 H2 H3 
    searchMaxSuggestions: 10, //搜索默认最大十条
    lastUpdated: 'Last Updated', // string | boolean
    // serviceWorker: {
    //   updatePopup: true, // Boolean | Object, 默认值是 undefined. 允许热更新
    //   // 如果设置为 true, 默认的文本配置将是: 
    //   updatePopup: {
    //     message: "New content is available.",
    //     buttonText: "Refresh"
    //   }
    // }

  },
  markdown: {
    lineNumbers: false, // 默认显示行号
  },

}
