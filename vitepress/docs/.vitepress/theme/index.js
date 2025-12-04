import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import DemoPreview from './components/DemoPreview.vue'
import PreviewIframe from './components/PreviewIframe.vue'
import './custom.css'

// 获取第一个组件路径
function getFirstComponentPathFromSidebar() {
  try {
    // 尝试从全局获取路由配置
    const sidebarConfig = window.__VITEPRESS_CONFIG__?.themeConfig?.sidebar
    if (sidebarConfig && sidebarConfig['/components/']) {
      const items = sidebarConfig['/components/']
      if (items && items.length > 0) {
        const firstGroup = items[0]
        if (firstGroup.items && firstGroup.items.length > 0) {
          return firstGroup.items[0].link
        }
      }
    }
  } catch (err) {
    console.warn('获取第一个组件路径失败:', err)
  }

  // 备用路径
  return '/components/PdButton/'
}

export default {
  ...DefaultTheme,
  Layout() {
    // 在客户端检查首页并重定向
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname
      // 只在根路径时重定向一次
      if (
        currentPath === '/' ||
        currentPath === '/index.html' ||
        currentPath === '/diandan/'
      ) {
        // 使用标记防止重复重定向
        if (!sessionStorage.getItem('_redirected_to_first_component')) {
          const firstComponentPath = getFirstComponentPathFromSidebar()
          sessionStorage.setItem('_redirected_to_first_component', 'true')
          window.location.href = firstComponentPath
          return null
        }
      }
    }
    return h(DefaultTheme.Layout)
  },
  enhanceApp({ app }) {
    app.component('DemoPreview', DemoPreview)
    app.component('PreviewIframe', PreviewIframe)
    // 动态导入 taro 组件 CSS，仅在客户端加载
    if (typeof window !== 'undefined') {
      import(
        '@tarojs/components/dist/taro-components/taro-components.css'
      ).catch(() => console.warn('Failed to load taro components CSS'))
    }
  }
}
