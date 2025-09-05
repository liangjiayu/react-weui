import path from 'node:path';
import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: '_site',
  mako: {},
  resolve: {
    docDirs: [{ type: 'doc', dir: 'docs' }],
    atomDirs: [{ type: 'component', dir: 'components' }],
    codeBlockMode: 'passive',
  },
  alias: {
    'react-weui': path.join(__dirname, 'components'),
  },
  scripts: [
    `if (location.pathname.startsWith('/~demos/')) {
      document.body.style.background = '#f5f5f5';
      document.body.dataset.weuiTheme = 'light';
    }`,
  ],
  themeConfig: {
    sidebarGroupModePath: ['/components', '/guide'],
    nav: {
      'zh-CN': [
        { title: '指南', link: '/docs/guide/quick-start' },
        { title: '组件', link: '/components/button' },
        { title: '示例', link: '/demo/secondary-sidebar-colors' },
      ],
    },
  },
});
