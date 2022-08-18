export default {
  mode: 'site',
  title: 'react-weui',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  base: '/react-weui/',
  publicPath: '/react-weui/',
  navs: [
    {
      title: '组件',
      path: '/components',
    },
  ],
  menus: {
    '/components': [
      {
        title: '基础组件',
        children: [
          '/components/Button',
          '/components/Cells',
          '/components/Icon',
          '/components/Flex',
        ],
      },
      {
        title: '反馈组件',
        children: [
          '/components/Toast',
          '/components/Dialog',
          '/components/ActionSheet',
          '/components/Msg',
          '/components/TopTips',
        ],
      },
      {
        title: '信息录入',
        children: [
          '/components/input',
          '/components/select',
          '/components/radio',
        ],
      },
    ],
  },
  alias: {
    '@': process.cwd() + '/src/',
  },
  scripts: [
    `if (location.pathname.startsWith('/react-weui/~demos/')) {
      document.body.style.background = '#f5f5f5';
      document.body.dataset.weuiTheme = 'light';
    }`,
  ],
  styles: [
    ` 
    #root .__dumi-default-mobile-demo-layout {
      padding: 0;
    }
    a[title='站长统计'] {
      display: none;
    }
    `,
  ],
  themeConfig: {
    hd: {
      rules: [
        // {mode: 'vw', options: [100, 750]}
      ],
    },
  },
};
