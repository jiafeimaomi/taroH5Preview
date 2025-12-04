#!/usr/bin/env node

/**
 * 简单的本地文件服务器
 * 用于解决直接打开 HTML 文件时的 CORS 跨域问题
 */

import http from 'http'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const PORT = 8080
const DIST_DIR = path.join(__dirname, 'docs/.vitepress/dist')

const server = http.createServer((req, res) => {
  // 解析请求的 URL
  let pathname = new URL(req.url, `http://${req.headers.host}`).pathname

  // 默认指向 index.html
  if (pathname === '/' || pathname === '/diandan/') {
    pathname = '/index.html'
  }

  // 移除 /diandan/ 前缀（如果有的话）
  if (pathname.startsWith('/diandan/')) {
    pathname = pathname.slice('/diandan'.length)
  }

  // 构建文件路径
  let filePath = path.join(DIST_DIR, pathname)

  // 如果请求的是目录，尝试加载 index.html
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html')
  }

  // 读取文件并发送响应
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // 404 错误，重定向到 index.html（支持 SPA 路由）
      fs.readFile(path.join(DIST_DIR, 'index.html'), (fallbackErr, fallbackData) => {
        if (fallbackErr) {
          res.writeHead(404, { 'Content-Type': 'text/plain' })
          res.end('404 Not Found')
          return
        }
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(fallbackData)
      })
      return
    }

    // 确定 Content-Type
    let contentType = 'text/plain'
    const ext = path.extname(filePath).toLowerCase()
    const mimeTypes = {
      '.html': 'text/html',
      '.js': 'application/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.svg': 'image/svg+xml',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.gif': 'image/gif',
      '.woff': 'font/woff',
      '.woff2': 'font/woff2',
      '.ttf': 'font/ttf',
      '.eot': 'application/vnd.ms-fontobject',
    }

    contentType = mimeTypes[ext] || 'application/octet-stream'

    // 设置响应头，允许跨域
    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache',
    })

    res.end(data)
  })
})

server.listen(PORT, () => {
  console.log('')
  console.log('========================================')
  console.log('📚 VitePress 本地服务器已启动')
  console.log('========================================')
  console.log('')
  console.log(`🌐 访问地址: http://localhost:${PORT}`)
  console.log(`📂 静态文件目录: ${DIST_DIR}`)
  console.log('')
  console.log('✨ 现在可以正确加载样式和资源文件')
  console.log('🛑 按 Ctrl+C 停止服务器')
  console.log('')
})

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ 端口 ${PORT} 已被占用，请检查或使用其他端口`)
  } else {
    console.error('❌ 服务器错误:', err)
  }
  process.exit(1)
})
