/**
 * 自动生成 VitePress 侧边栏配置
 * 根据 pdDocs/docs/components 目录下的组件自动生成菜单项
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * 扫描组件文档目录
 */
function scanComponentDocs() {
  const componentsDir = path.join(__dirname, '../components')

  if (!fs.existsSync(componentsDir)) {
    return { basic: [], business: [] }
  }

  const dirs = fs.readdirSync(componentsDir, { withFileTypes: true })
  const basic = []
  const business = []

  dirs.forEach((dir) => {
    if (!dir.isDirectory()) return

    const componentName = dir.name
    const indexFile = path.join(componentsDir, componentName, 'index.md')

    // 检查是否有 index.md
    if (!fs.existsSync(indexFile)) {
      return
    }

    // 提取中文名称（从 index.md 第一行的 # 标题）
    try {
      const content = fs.readFileSync(indexFile, 'utf-8')
      const titleMatch = content.match(/^# (.+)/m)
      const title = titleMatch ? titleMatch[1].trim() : componentName

      const item = {
        text: title,
        link: `/components/${componentName}/`,
      }

      // 区分基础组件和业务组件
      if (componentName.startsWith('Pd')) {
        basic.push(item)
      } else {
        business.push(item)
      }
    } catch (err) {
      console.warn(`读取 ${componentName} 文档失败:`, err.message)
    }
  })

  // 按名称排序
  basic.sort((a, b) => a.text.localeCompare(b.text, 'zh-CN'))
  business.sort((a, b) => a.text.localeCompare(b.text, 'zh-CN'))

  return { basic, business }
}

/**
 * 生成 VitePress 侧边栏配置
 */
export function getSidebar() {
  const { basic, business } = scanComponentDocs()

  const items = []

  if (basic.length > 0) {
    items.push({
      text: '基础组件',
      items: basic,
    })
  }

  if (business.length > 0) {
    items.push({
      text: '业务组件',
      items: business,
    })
  }

  return {
    '/components/': items,
  }
}

/**
 * 获取第一个组件文档路径
 */
export function getFirstComponentPath() {
  const { basic, business } = scanComponentDocs()
  const allComponents = [...basic, ...business]

  if (allComponents.length > 0) {
    return allComponents[0].link
  }

  return '/components/PdButton/'
}

/**
 * 生成导航栏配置
 */
export function getNav() {
  return [
    // { text: '首页', link: '/' },
    { text: '组件', link: '/components/PdButton/' },
    { text: 'GitHub', link: 'https://github.com' },
  ]
}
