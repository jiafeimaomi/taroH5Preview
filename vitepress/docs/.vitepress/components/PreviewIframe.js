/**
 * VitePress 文档中的 iframe 预览组件
 * 用于展示组件预览页面
 */

export default {
  name: 'PreviewIframe',
  props: {
    // 组件预览页面的路由路径
    component: {
      type: String,
      required: true,
    },
  },
  computed: {
    // 构建完整的 iframe src URL
    iframeSrc() {
      // 根据开发/生产环境获取预览服务器地址
      const isDev = import.meta.env.DEV
      const baseUrl = isDev ? 'http://localhost:8089' : window.location.origin

      return `${baseUrl}/pages/component-preview/${this.component}`
    },
  },
  template: `
    <div class="preview-iframe-container">
      <iframe
        :src="iframeSrc"
        title="组件预览"
        class="preview-iframe"
        frameborder="0"
        allow="same-origin"
      ></iframe>
    </div>
  `,
}
