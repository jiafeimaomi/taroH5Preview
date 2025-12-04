# PdCheckbox 组件

PdCheckbox 自定义组件

## 介绍

PdCheckbox 是一个功能完整的自定义组件，支持跨端使用。

## 引入方式

```tsx
import PdCheckbox from '@/components/PdCore/PdCheckbox'
```

## 基础用法

```tsx
import React from 'react'
import PdCheckbox from '@/components/PdCore/PdCheckbox'

export default function Demo() {
  return (
    <PdCheckbox>
      组件内容
    </PdCheckbox>
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
| onChange | 属性说明 | `(e: CheckboxChangeEvent) => void` | - |
| value | 属性说明 | `string | number | boolean` | - |
| checked | 属性说明 | `boolean` | - |
| disabled | 属性说明 | `boolean` | - |
| size | 属性说明 | `'small' | 'medium' | 'large'` | - |
| color | 属性说明 | `string` | - |

### Events

暂无事件

## 类型定义

```tsx
export interface PdCheckboxProps {
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
  onChange?: (e: CheckboxChangeEvent) => void

  /** value 属性 */
  value?: string | number | boolean

  /** checked 属性 */
  checked?: boolean

  /** disabled 属性 */
  disabled?: boolean

  /** size 属性 */
  size?: 'small' | 'medium' | 'large'

  /** color 属性 */
  color?: string
  /** 点击事件（小程序/H5） */
  onClick?: (e?: any) => void
  /** 点击事件（RN） */
  onPress?: (e?: any) => void
}
```

## 组件预览

<PreviewIframe component="checkbox" />
