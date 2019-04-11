module.exports = {
  base: '/vuepress/',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/img/logo.png' }]
  ],
  title: 'VuePress',
  description: 'Just playing around',
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
        {
          title: '首页',
          collapsable: false,
          children: [
            '',
          ]
        },     
      ],
      '/compatible/': [
        {
          title: '兼容汇总',
          collapsable: false,
          children: [
            '',
          ]
        },     
      ],
      '/method/': [  

        {
          title: 'Math',
          collapsable: false,
          children: [
            'Math/test',
          ]
        }, 
        {
          title: 'Array',
          collapsable: false,
          children: [ 
            'Array/bianping',
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