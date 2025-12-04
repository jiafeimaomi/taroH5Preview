<template>
  <div class="preview-iframe-container component-preview">
    <iframe
      :src="iframeSrc"
      title="组件预览"
      class="preview-iframe"
      frameborder="0"
      allow="same-origin"
    ></iframe>
  </div>
</template>

<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    component: {
      type: String,
      required: true,
    },
  })

  const isDev = import.meta.env.DEV
  const baseUrl = computed(() => {
    if (isDev) {
      return 'http://localhost:8089'
    }
    // 生产环境使用相对路径
    return '/preview'
  })

  const iframeSrc = computed(() => {
    if (isDev) {
      // 开发环境使用 hash 路由格式
      return `${baseUrl.value}/#/pages/component-preview/${props.component}`
    }
    // 生产环境使用普通路径
    return `${baseUrl.value}/pages/component-preview/${props.component}`
  })
</script>

<style scoped>
  .preview-iframe-container {
    position: relative;
    width: 100%;
    margin: 20px 0;
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    overflow: hidden;
    background: white;
  }

  .preview-iframe {
    display: block;
    width: 100%;
    min-height: 600px;
    height: 600px;
    border: none;
  }

  /* 响应式设计 */
  @media (max-width: 960px) {
    .preview-iframe {
      min-height: 500px;
      height: 500px;
    }
  }

  @media (max-width: 640px) {
    .preview-iframe {
      min-height: 400px;
      height: 400px;
    }
  }
</style>
