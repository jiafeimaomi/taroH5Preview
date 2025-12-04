# PdRadio 单选框组件

## 元数据

| 属性     | 值                                           |
| -------- | -------------------------------------------- |
| 组件名   | PdRadio                                      |
| 描述     | 单选框组件，支持选中状态、禁用状态和组合使用 |
| 跨端支持 | ✓ 小程序 ✓ RN ✓ H5                           |
| 引入路径 | `src/components/PdCore/PdRadio`              |
| 版本     | 1.0.0                                        |

---

## 组件说明

PdRadio 是一个单选框组件，基于 Taro 的 Radio 组件封装，支持选中状态、禁用状态和组合使用等功能。

### 核心特性

- **状态控制**：支持选中、未选中、禁用状态
- **事件处理**：支持状态变化事件
- **组合使用**：可配合 PdRadioGroup 使用
- **取消选择**：支持单个 Radio 点击取消选择

---

## 基础用法

### 基础单选框

```tsx
import { useState } from 'react'
import PdRadio from '@/components/PdCore/PdRadio'

export default function Demo() {
  const [checked, setChecked] = useState(false)

  return (
    <PdRadio checked={checked} onChange={(e) => setChecked(e.target.checked)}>
      选项1
    </PdRadio>
  )
}
```

### 禁用状态

```tsx
<PdRadio disabled>禁用的单选框</PdRadio>
```

### 支持取消选择

```tsx
<PdRadio toggle checked={true}>
  可取消的单选框
</PdRadio>
```

### 配合 RadioGroup 使用

```tsx
import { useState } from 'react'
import PdRadio from '@/components/PdCore/PdRadio'

export default function Demo() {
  const [value, setValue] = useState('apple')

  return (
    <PdRadio.Group value={value} onChange={(e) => setValue(e.detail.value)}>
      <PdRadio value='apple'>苹果</PdRadio>
      <PdRadio value='banana'>香蕉</PdRadio>
      <PdRadio value='orange'>橙子</PdRadio>
    </PdRadio.Group>
  )
}
```

---

## API

### Props

| 参数        | 说明                             | 类型                            | 默认值  |
| ----------- | -------------------------------- | ------------------------------- | ------- |
| `className` | 自定义类名                       | `string`                        | -       |
| `style`     | 自定义样式对象                   | `CSSProperties`                 | -       |
| `children`  | 单选框标签内容                   | `ReactNode`                     | -       |
| `onChange`  | 状态变化时的回调函数             | `(e: RadioChangeEvent) => void` | -       |
| `checked`   | 是否选中                         | `boolean`                       | -       |
| `disabled`  | 是否禁用                         | `boolean`                       | `false` |
| `value`     | 单选框的值，在 RadioGroup 中使用 | `string \| number`              | -       |
| `toggle`    | 是否允许单个 Radio 点击取消      | `boolean`                       | `false` |

### RadioChangeEvent

| 参数     | 说明     | 类型                                  |
| -------- | -------- | ------------------------------------- |
| `target` | 事件目标 | `{ value: string; checked: boolean }` |
| `detail` | 事件详情 | `{ value: string; checked: boolean }` |

### Events

| 事件名     | 说明                 | 回调参数                        |
| ---------- | -------------------- | ------------------------------- |
| `onChange` | 状态变化时的回调函数 | `(e: RadioChangeEvent) => void` |

---

## PdRadio.Group

### Props

| 参数           | 说明                       | 类型                                 | 默认值 |
| -------------- | -------------------------- | ------------------------------------ | ------ |
| `className`    | 自定义类名                 | `string`                             | -      |
| `style`        | 自定义样式对象             | `CSSProperties`                      | -      |
| `children`     | 子元素                     | `ReactNode`                          | -      |
| `onChange`     | 状态变化时的回调函数       | `(e: RadioGroupChangeEvent) => void` | -      |
| `value`        | 选中的值（受控模式）       | `string \| number`                   | -      |
| `defaultValue` | 默认选中的值（非受控模式） | `string \| number`                   | -      |
| `id`           | 组 ID                      | `string`                             | -      |

### RadioGroupChangeEvent

| 参数     | 说明     | 类型                                  |
| -------- | -------- | ------------------------------------- |
| `target` | 事件目标 | `{ value: string; checked: boolean }` |
| `detail` | 事件详情 | `{ value: string; checked: boolean }` |

### Events

| 事件名     | 说明                 | 回调参数                             |
| ---------- | -------------------- | ------------------------------------ |
| `onChange` | 状态变化时的回调函数 | `(e: RadioGroupChangeEvent) => void` |

---

## 注意事项

1. **组合使用**：

   - 单独使用时，通过 `checked` 控制选中状态
   - 配合 `PdRadio.Group` 使用时，通过 `value` 控制选中状态

2. **取消选择**：

   - 通过 `toggle` 属性可以允许单个 Radio 点击取消选择

3. **事件处理**：

   - `onChange` 事件在选中状态改变时触发
   - 事件对象包含 `target.value` 和 `target.checked` 属性

4. **跨端兼容**：在不同平台上，单选框的外观和行为可能略有差异

---

## 更新日志

### v1.0.0

- ✨ 初始发布
- ✨ 支持选中状态控制
- ✨ 支持禁用状态
- ✨ 支持配合 RadioGroup 使用
- ✨ 支持单个 Radio 点击取消选择


---


<PreviewIframe component="radio" />
