# PdRadioGroup 组件

单选框组组件

## 介绍

PdRadioGroup 是一个功能完整的自定义组件，支持跨端使用。

## 引入方式

```tsx
import PdRadioGroup from '@/components/PdCore/PdRadioGroup'
```

## 基础用法

```tsx
import React from 'react'
import PdRadioGroup from '@/components/PdCore/PdRadioGroup'

export default function Demo() {
  return (
    <PdRadioGroup>
      组件内容
    </PdRadioGroup>
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
| onChange | 属性说明 | `(e: RadioGroupChangeEvent) => void` | - |
| value | 属性说明 | `string | number` | - |
| defaultValue | 属性说明 | `string | number` | - |
| id | 属性说明 | `string` | - |

### Events

暂无事件

## 类型定义

```tsx
export interface PdRadioGroupProps {
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
  onChange?: (e: RadioGroupChangeEvent) => void

  /** value 属性 */
  value?: string | number

  /** defaultValue 属性 */
  defaultValue?: string | number

  /** id 属性 */
  id?: string
  /** 点击事件（小程序/H5） */
  onClick?: (e?: any) => void
  /** 点击事件（RN） */
  onPress?: (e?: any) => void
}
```

## 组件预览

<PreviewIframe component="radiogroup" />
