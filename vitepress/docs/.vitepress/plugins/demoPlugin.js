import MarkdownItContainer from 'markdown-it-container'

export default function demoPlugin(md) {
  md.use(MarkdownItContainer, 'demo', {
    render(tokens, idx, _tokens, env) {
      const token = tokens[idx]
      const demoFile = token.info.trim().replace('demo ', '').trim()

      // env.path 可能是绝对路径或相对路径
      let currentFile = env.path

      // 如果是绝对路径，提取相对于 pdDocs/docs 的部分
      if (currentFile.includes('pdDocs/docs')) {
        const docsIndex = currentFile.indexOf('pdDocs/docs')
        currentFile = currentFile.substring(docsIndex + 'pdDocs/docs'.length)
      } else if (currentFile.includes('\\')) {
        // 处理 Windows 路径
        currentFile = currentFile.replace(/\\/g, '/')
        const docsIndex = currentFile.indexOf('docs/components')
        if (docsIndex !== -1) {
          currentFile = currentFile.substring(docsIndex + 'docs'.length)
        }
      }

      // 确保以 / 开头
      if (!currentFile.startsWith('/')) {
        currentFile = '/' + currentFile
      }

      // 使用纯字符串操作
      const parts = currentFile.split('/')
      // 去掉最后的文件名
      parts.pop()
      const currentDir = parts.join('/') // 例如: /components/PdButton

      // 拼接路径
      let demoPath = currentDir + '/' + demoFile

      // 规范化路径（处理 ../ 和 ./ 等）
      demoPath = demoPath.replace(/\/\.\//g, '/') // 移除 ./
      while (demoPath.includes('/../')) {
        demoPath = demoPath.replace(/\/[^/]+\/\.\.\//, '/')
      }

      // 去掉开头的 /
      if (demoPath.startsWith('/')) {
        demoPath = demoPath.slice(1)
      }

      if (token.nesting === 1) {
        return `<DemoPreview file="${demoPath}">\n`
      } else {
        return `</DemoPreview>\n`
      }
    },
  })
}
