<template>
  <div class="demo-preview">
    <div v-if="component" class="demo-block">
      <component :is="component" />
    </div>
    <div v-else class="demo-loading">{{ loadingMessage }}</div>
  </div>
</template>

<script setup>
  import { ref, onMounted, markRaw } from 'vue'

  const props = defineProps({
    file: String,
  })

  const component = ref(null)
  const loadingMessage = ref('加载中...')

  onMounted(async () => {
    if (!props.file) {
      loadingMessage.value = '没有指定文件'
      return
    }

    try {
      // props.file 格式如 components/PdButton/demos/basic.vue
      // DemoPreview 位于 .vitepress/theme/components/
      // 需要向上 3 级到 docs 根目录，再进入文件
      const filePath = `../../../${props.file}`
      console.log('加载文件路径:', filePath)

      const mod = await import(/* @vite-ignore */ filePath)
      console.log('成功加载模块:', mod)
      // 使用 markRaw 包装组件，避免 Vue 转换为 reactive
      component.value = markRaw(mod.default || mod)
    } catch (e) {
      console.error('演示加载失败:', props.file, 'Error:', e)
      loadingMessage.value = `加载失败: ${e.message}`
      console.error('完整错误:', e.stack)
    }
  })
</script>

<style scoped>
  .demo-preview {
    margin: 16px 0;
    border: 1px solid #ebedf0;
    border-radius: 8px;
    overflow: hidden;
  }

  .demo-block {
    padding: 24px;
    background: #fff;
  }

  .demo-loading {
    padding: 24px;
    text-align: center;
    color: #666;
  }
</style>
