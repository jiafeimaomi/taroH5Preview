import { getSidebar, getNav, getFirstComponentPath } from './sidebar.js'
import demoPlugin from './plugins/demoPlugin.js'
import path from 'path'

export default {
  base: '/taroH5Preview/',
  outDir: '../../dist',
  title: 'Taro自定义组件库文档',
  description: '自定义组件库文档',
  markdown: {
    config: (md) => md.use(demoPlugin)
  },
  themeConfig: {
    nav: getNav(),
    sidebar: getSidebar(),
    socialLinks: [{ icon: 'github', link: 'https://github.com' }]
  },
  vite: {
    define: {
      'process.env': JSON.stringify({}),
      'process.env.NODE_ENV': JSON.stringify('development'),
      global: 'globalThis',
      ENABLE_INNER_HTML: true,
      ENABLE_ADJACENT_HTML: true,
      ENABLE_CLONE_NODE: true,
      ENABLE_CONTAINS: true,
      ENABLE_SIZE_APIS: true,
      ENABLE_TEMPLATE_CONTENT: true,
      ENABLE_MUTATION_OBSERVER: true
    },
    resolve: {
      alias: {
        '/src': path.resolve(__dirname, '../../src')
      }
    },
    server: {
      fs: {
        allow: ['../..']
      }
    },
    build: {
      assetsDir: 'assets'
    }
  }
}
