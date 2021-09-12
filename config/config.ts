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
        children: ['/components/Button', '/components/Flex'],
      },
    ],
  },
  themeConfig: {
    hd: {
      rules: [
        // {mode: 'vw', options: [100, 750]}
      ],
    },
  },
};
