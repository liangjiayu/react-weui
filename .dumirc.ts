import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  outputPath: '_site',
  // themeConfig: {
  //   name: 'react-weui',
  // },
  // mfsu: false,
  // mako: {},
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
      // document.body.style.background = '#f5f5f5';
      document.body.dataset.weuiTheme = 'light';
    }`,
  ],
  extraPostCSSPlugins: ['@tailwindcss/postcss'],
  themeConfig: {
    hd: {
      rules: [
        // {mode: 'vw', options: [100, 750]}
      ],
    },
  },
});
