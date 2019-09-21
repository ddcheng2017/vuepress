module.exports = {
  base: '/vuepress/',
  dest: './../newGitPages/vuepress',
  head: [
    ['link', { rel: 'icon', href: '/img/logo.png' }]
  ],
  title: 'VuePress',
  description: 'vuePress个人主页',
  // keywords:'web前端, HTML5, CSS3, html, CSS, JS, JavaScript, 前端, vue, mvc, 博客, 18禁',
  markdown: {
    lineNumbers: false, // 默认显示行号
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/home/' },
      { text: '随手记', link: '/practice/' },
      { text: '方法汇总', link: '/method/' },
      // { text: '总结资料', link: '/summary/' },
      {
        text: '总结资料',
        items: [
          { text: 'Flex布局', link: '/summary/flex' },
          { text: 'Gird布局', link: '/summary/gird' },
          { text: 'RegExp正则', link: '/summary/RegExp' },
          { text: 'ts总结', link: '/summary/ts' },
          { text: 'angular基础', link: '/summary/angular' },
          { text: 'vue基础', link: '/summary/vue' },
        ]
      },
      // { text: 'Github', link: 'https://google.com' },
    ],
    sidebar: {
      // fallback
      '/home/': [
        // ['', '首页'],
        // {
        //   title: '首页',
        //   collapsable: false,
        //   children: [
        //     ['', '首页'],
        //   ]
        // },
      ],
      '/practice/':[
        ['','一句话总结'],
        ['dataType','数据类型']
      ],
      // '/compatible/': [
      //   ['mouse', '鼠标滚轮兼容问题'],
      //   ['getCss', '获取元素的样式'],
      //   // {
      //   //   title: '兼容汇总',
      //   //   collapsable: false,
      //   //   children: [
      //   //     ['mouse', '鼠标滚轮在各个浏览器的兼容问题'],
      //   //   ]
      //   // },
      // ],
      '/method/': [
        {
          title: 'Other',
          collapsable: false,
          children: [
            ['browserInfo', 'js判断浏览器方法'],
            ['height', '浏览器中的宽高问题'],
            ['nodeIO', 'node中的输入与输出'],
            ['rem', '移动端rem的js监控'],
            ['scrollBar', '浏览器自定义滚动条'],
            ['hashAnimate', '使用js动态为锚点添加动画'],
            ['time', 'js中的时间问题'],
            ['selectText', '选择div中的所有文字'],
          ]
        },
        {
          title: 'String',
          collapsable: false,
          children: [
            ['String/find', '获取指定元素的指定出现位置'],
          ]
        },
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
            ['Array/pushNoRepeat', '数组添加非重复元素'],
          ]
        },
        {
          title: 'Object',
          collapsable: false,
          children: [
            ['Object/copy', '对象的拷贝（深拷贝和浅拷贝）'],
          ]
        },
        {
          title: 'Compatible',
          collapsable: false,
          children: [
            // ['Compatible/copy', '对象的拷贝（深拷贝和浅拷贝）'],
            ['Compatible/mouse', '鼠标滚轮兼容问题'],
            ['Compatible/getCss', '获取元素的样式'],
          ]
        },
      ],
      // '/example/': [
      //   // ['scrollBar', '浏览器自定义滚动条'],
      // ],
      // '/summary/': [
      //   // ['','总结资料'],
      //   ['flex', 'Flex布局'],
      //   ['gird', 'Gird布局'],
      //   ['RegExp', 'js中正则的使用和基本知识回顾'],
      //   ['ts', 'typescript学习笔记'],
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
    toc: { includeLevel: [2, 3] }
  },

}
