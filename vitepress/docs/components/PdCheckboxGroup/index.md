# PdCheckboxGroup 组件

PdCheckboxGroup 自定义组件

## 介绍

PdCheckboxGroup 是一个功能完整的自定义组件，支持跨端使用。

## 引入方式

```tsx
import PdCheckboxGroup from '@/components/PdCore/PdCheckboxGroup'
```

## 基础用法

```tsx
import React from 'react'
import PdCheckboxGroup from '@/components/PdCore/PdCheckboxGroup'

export default function Demo() {
  return (
    <PdCheckboxGroup>
      组件内容
    </PdCheckboxGroup>
  )
}
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 属性说明 | `string` | - |
| style | 属性说明 | `React.CSSProperties` | - |
| children | 属性说明 | `React.ReactNode` | - |
| onChange | 属性说明 | `(e: CheckboxGroupChangeEvent) => void` | - |
| value | 属性说明 | `Array<string | number | boolean>` | - |
| defaultValue | 属性说明 | `Array<string | number | boolean>` | - |

### Events

暂无事件

## 类型定义

```tsx
export interface PdCheckboxGroupProps {
  /** 自定义类名 */
  className?: string
  /** 自定义样式对象 */
  style?: React.CSSProperties
  /** 子元素 */
  children?: React.ReactNode

  /** className 属性 */
  className?: string

  /** style 属性 */
  style?: React.CSSProperties

  /** children 属性 */
  children?: React.ReactNode

  /** onChange 属性 */
  onChange?: (e: CheckboxGroupChangeEvent) => void

  /** value 属性 */
  value?: Array<string | number | boolean>

  /** defaultValue 属性 */
  defaultValue?: Array<string | number | boolean>
  /** 点击事件（小程序/H5） */
  onClick?: (e?: any) => void
  /** 点击事件（RN） */
  onPress?: (e?: any) => void
}
```

## 组件预览

<PreviewIframe component="checkboxgroup" />
