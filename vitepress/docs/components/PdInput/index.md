# PdInput 输入框组件

## 元数据

| 属性     | 值                                     |
| -------- | -------------------------------------- |
| 组件名   | PdInput                                |
| 描述     | 输入框组件，支持多种输入类型和事件处理 |
| 跨端支持 | ✓ 小程序 ✓ RN ✓ H5                     |
| 引入路径 | `src/components/PdCore/PdInput`        |
| 版本     | 1.0.0                                  |

---

## 组件说明

PdInput 是一个基础的输入框组件，基于 Taro 的 Input 组件封装，支持多种输入类型和完整的事件处理。

### 核心特性

- **多种输入类型**：支持文本、数字、密码等多种输入类型
- **输入过滤**：自动过滤非法输入内容
- **事件处理**：支持输入、焦点、确认等完整事件
- **样式定制**：支持自定义类名和样式对象
- **长度限制**：支持最大输入长度限制

---

## 基础用法

### 基础输入框

```tsx
import { useState } from 'react'
import PdInput from '@/components/PdCore/PdInput'

export default function Demo() {
  const [value, setValue] = useState('')

  return (
    <PdInput
      value={value}
      placeholder='请输入内容'
      onInput={(e) => setValue(e.detail.value)}
    />
  )
}
```

### 数字输入框

```tsx
<PdInput type='number' placeholder='请输入数字' />
```

### 密码输入框

```tsx
<PdInput type='password' placeholder='请输入密码' />
```

### 身份证输入框

```tsx
<PdInput type='idcard' placeholder='请输入身份证号' />
```

### 小数输入框

```tsx
<PdInput type='digit' placeholder='请输入金额' />
```

### 禁用状态

```tsx
<PdInput disabled placeholder='禁用状态' />
```

### 限制输入长度

```tsx
<PdInput maxlength={10} placeholder='最多输入10个字符' />
```

### 自定义组件 Demo

```tsx
import PdInputDemo from './demo/index'

// 在文档中直接使用 Demo 组件
;<PdInputDemo />
```

---

## API

### Props

| 参数          | 说明               | 类型                                                      | 默认值   |
| ------------- | ------------------ | --------------------------------------------------------- | -------- |
| `className`   | 自定义类名         | `string`                                                  | -        |
| `style`       | 自定义样式对象     | `CSSProperties`                                           | -        |
| `value`       | 输入框值           | `string`                                                  | -        |
| `placeholder` | 占位符             | `string`                                                  | -        |
| `type`        | 输入类型           | `'text' \| 'number' \| 'idcard' \| 'digit' \| 'password'` | `'text'` |
| `disabled`    | 是否禁用           | `boolean`                                                 | `false`  |
| `maxlength`   | 最大输入长度       | `number`                                                  | -        |
| `onInput`     | 输入时触发         | `(e: InputEvent) => void`                                 | -        |
| `onChange`    | 值变化时触发       | `(e: InputEvent) => void`                                 | -        |
| `onFocus`     | 获取焦点时触发     | `(e?: any) => void`                                       | -        |
| `onBlur`      | 失去焦点时触发     | `(e?: any) => void`                                       | -        |
| `onConfirm`   | 点击完成按钮时触发 | `(e?: any) => void`                                       | -        |

### InputEvent

| 参数     | 说明     | 类型                |
| -------- | -------- | ------------------- |
| `detail` | 事件详情 | `{ value: string }` |

### Events

| 事件名      | 说明               | 回调参数                  |
| ----------- | ------------------ | ------------------------- |
| `onInput`   | 输入时触发         | `(e: InputEvent) => void` |
| `onChange`  | 值变化时触发       | `(e: InputEvent) => void` |
| `onFocus`   | 获取焦点时触发     | `(e?: any) => void`       |
| `onBlur`    | 失去焦点时触发     | `(e?: any) => void`       |
| `onConfirm` | 点击完成按钮时触发 | `(e?: any) => void`       |

---

## 注意事项

1. **输入类型**：

   - `text`：普通文本输入
   - `number`：纯数字输入
   - `idcard`：身份证号码输入（数字和 X）
   - `digit`：小数输入（数字和小数点）
   - `password`：密码输入

2. **输入过滤**：组件会根据输入类型自动过滤非法字符

3. **事件处理**：

   - `onInput` 和 `onChange` 功能相同，可以任选其一使用
   - `onConfirm` 在点击键盘完成按钮时触发

4. **跨端兼容**：在不同平台上，输入框的外观和行为可能略有差异

---

## 更新日志

### v1.0.0

- ✨ 初始发布
- ✨ 支持多种输入类型
- ✨ 支持输入内容过滤
- ✨ 支持完整的事件处理
- ✨ 支持长度限制和禁用状态


---


<PreviewIframe component="input" />
