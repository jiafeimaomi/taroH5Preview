# 组件库文档

欢迎来到点单项目的自定义组件库文档。本文档展示了所有可用的自定义组件及其使用方法。

## 📦 组件库概览

该组件库包含两大类组件：

### 基础组件 (PdCore)

基础组件库提供了一系列跨端通用的 UI 组件，可在小程序、React Native 和 H5 等多个平台使用。

| 组件名 | 描述 | 链接 |
|-------|------|------|
| PdButton | 通用按钮组件 | [查看文档](/components/PdButton/) |
| PdCheckbox | PdCheckbox 自定义组件 | [查看文档](/components/PdCheckbox/) |
| PdCheckboxGroup | PdCheckboxGroup 自定义组件 | [查看文档](/components/PdCheckboxGroup/) |
| PdInput | 输入框组件 | [查看文档](/components/PdInput/) |
| PdRadio | 单选框组件 | [查看文档](/components/PdRadio/) |
| PdRadioGroup | 单选框组组件 | [查看文档](/components/PdRadioGroup/) |
| PdText | 文本组件 | [查看文档](/components/PdText/) |
| PdView | 视图容器组件 | [查看文档](/components/PdView/) |

### 业务组件

业务组件是针对特定场景开发的高级组件。

| 组件名 | 描述 | 链接 |
|-------|------|------|
| PhoneInput | 电话号码输入组件 | [查看文档](/components/PhoneInput/) |

## 🚀 快速开始

### 安装与导入

所有组件都位于 `src/components` 目录下，你可以直接导入使用：

```tsx
// 导入基础组件
import { PdButton, PdInput, PdText } from '@/components/PdCore'

// 或单个导入
import PdButton from '@/components/PdCore/PdButton'

// 导入业务组件
import PhoneInput from '@/components/PhoneInput'
```

### 基本使用

```tsx
import { PdButton, PdInput } from '@/components/PdCore'
import { useState } from 'react'

export default function App() {
  const [text, setText] = useState('')

  return (
    <>
      <PdInput 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        placeholder="输入内容"
      />
      <PdButton onClick={() => console.log(text)}>
        提交
      </PdButton>
    </>
  )
}
```

## 📖 组件文档

点击上方导航栏或上面表格中的链接，可以查看每个组件的详细文档，包括：

- 完整的 API 文档
- 使用示例
- 特性说明
- 平台兼容性信息

## 🎨 设计特性

### 跨端兼容性

所有基础组件都支持：
- ✅ 微信小程序
- ✅ React Native
- ✅ H5 浏览器

### 统一接口

组件提供统一的接口和属性，在不同平台上自动适配，无需手动调整。

### 类型安全

所有组件都使用 TypeScript 编写，提供完整的类型支持和智能提示。

## 💡 最佳实践

### 1. 合理使用容器组件

使用 `PdView` 进行布局和容器包装：

```tsx
<PdView className="container">
  <PdText>标题</PdText>
  <PdInput placeholder="输入框" />
</PdView>
```

### 2. 处理事件

```tsx
const handleButtonClick = () => {
  // 处理点击事件
}

<PdButton onClick={handleButtonClick}>点击</PdButton>
```

### 3. 组合使用

利用组件的灵活性进行组合：

```tsx
<PdView className="form">
  <PdText>选择选项</PdText>
  <PdRadioGroup value={selected} onChange={setSelected}>
    <PdRadio value="1">选项 1</PdRadio>
    <PdRadio value="2">选项 2</PdRadio>
  </PdRadioGroup>
</PdView>
```

## 📝 文档贡献

如果你想：
- 为组件库添加新组件
- 改进现有组件文档
- 提交 Bug 报告或功能建议

请查看项目的贡献指南（Coming Soon）。

## 🔗 相关资源

- [Taro 官方文档](https://taro-docs.jd.com/)
- [项目 GitHub 仓库](https://github.com)
- [设计规范](Coming Soon)

---

**最后更新**: 2024年12月
**文档版本**: 1.0.0
