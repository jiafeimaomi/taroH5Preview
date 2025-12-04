# PdText 文本组件

## 元数据

| 属性     | 值                                     |
| -------- | -------------------------------------- |
| 组件名   | PdText                                 |
| 描述     | 文本组件，支持文本选择、行数限制等功能 |
| 跨端支持 | ✓ 小程序 ✓ RN ✓ H5                     |
| 引入路径 | `src/components/PdCore/PdText`         |
| 版本     | 1.0.0                                  |

---

## 组件说明

PdText 是一个基础的文本组件，基于 Taro 的 Text 组件封装，提供了文本选择、行数限制等增强功能。

### 核心特性

- **文本选择**：支持文本选择和复制功能
- **行数限制**：支持限制文本显示的最大行数
- **事件处理**：支持点击事件
- **样式定制**：支持自定义类名和样式对象

---

## 基础用法

### 基础文本

```tsx
import PdText from '@/components/PdCore/PdText'

export default function Demo() {
  return <PdText>普通文本</PdText>
}
```

### 可选择文本

```tsx
<PdText selectable>可复制的文本</PdText>
```

### 限制行数

```tsx
<PdText numberOfLines={2}>
  这是一段很长的文本，超过两行的部分会被省略显示...
</PdText>
```

### 带点击事件

```tsx
<PdText onClick={() => console.log('文本被点击')}>可点击的文本</PdText>
```

---

## API

### Props

| 参数            | 说明               | 类型                | 默认值  |
| --------------- | ------------------ | ------------------- | ------- |
| `className`     | 自定义类名         | `string`            | -       |
| `style`         | 自定义样式对象     | `CSSProperties`     | -       |
| `children`      | 文本内容           | `ReactNode`         | -       |
| `selectable`    | 是否可选择         | `boolean`           | `false` |
| `userSelect`    | 是否可选择（别名） | `boolean`           | -       |
| `numberOfLines` | 最大显示行数       | `number`            | -       |
| `onClick`       | 点击事件           | `(e?: any) => void` | -       |

### Events

| 事件名    | 说明     | 回调参数            |
| --------- | -------- | ------------------- |
| `onClick` | 点击事件 | `(e?: any) => void` |

---

## 注意事项

1. **行数限制**：通过 `numberOfLines` 属性可以限制文本显示的最大行数，超出部分会以省略号显示
2. **文本选择**：`selectable` 和 `userSelect` 属性都可以启用文本选择功能
3. **跨端兼容**：在不同平台上，文本选择和行数限制的表现可能略有差异

---

## 更新日志

### v1.0.0

- ✨ 初始发布
- ✨ 支持文本选择功能
- ✨ 支持行数限制
- ✨ 支持点击事件


---


<PreviewIframe component="text" />
