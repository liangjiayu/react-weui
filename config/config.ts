export default {
  mode: 'site',
  title: 'react-weui',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  navs: [
    {
      title: '组件',
      path: '/components',
    },
  ],
  menus: {
    '/components': [
      {
        title: '基础',
        children: [
          '/components/Button',
          '/components/Flex',
          '/components/Icon',
        ],
      },
    ],
  },
  alias: {
    '@': process.cwd() + '/src/',
  },
  scripts: [
    `if (location.pathname.startsWith('/~demos/')) {
      document.body.style.background = '#f5f5f5'
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
