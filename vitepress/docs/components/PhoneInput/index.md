# PhoneInput 手机号输入组件

## 元数据

| 属性     | 值                               |
| -------- | -------------------------------- |
| 组件名   | PhoneInput                       |
| 描述     | 手机号输入组件，支持国际区号选择 |
| 跨端支持 | ✓ 小程序 ✓ RN ✓ H5               |
| 引入路径 | `src/components/PhoneInput`      |
| 版本     | 1.0.0                            |

---

## 组件说明

PhoneInput 是一个手机号输入组件，支持国际区号选择和搜索功能，提供完整的手机号输入体验。

### 核心特性

- **国际区号选择**：支持选择不同国家/地区的国际区号
- **搜索功能**：支持搜索地区或区号
- **输入限制**：自动限制手机号输入格式
- **事件回调**：支持输入变化和区号变化的回调
- **样式定制**：支持自定义样式

---

## 基础用法

### 基础手机号输入

```tsx
import { useState } from 'react'
import PhoneInput from '@/components/PhoneInput'

export default function Demo() {
  const [phone, setPhone] = useState('')

  return (
    <PhoneInput value={phone} placeholder='请输入手机号' onInput={setPhone} />
  )
}
```

### 监听区号变化

```tsx
import { useState } from 'react'
import PhoneInput from '@/components/PhoneInput'

export default function Demo() {
  const [phone, setPhone] = useState('')
  const [region, setRegion] = useState({
    code: 'CN',
    name: '中国',
    dialCode: '+86',
  })

  return (
    <PhoneInput
      value={phone}
      placeholder='请输入手机号'
      onInput={setPhone}
      onRegionChange={setRegion}
    />
  )
}
```

### 自定义样式

```tsx
<PhoneInput
  value={phone}
  placeholder='请输入手机号'
  onInput={setPhone}
  className='my-custom-phone-input'
/>
```

### 自定义组件 Demo

```tsx
import PhoneInputDemo from './demo/index'

// 在文档中直接使用 Demo 组件
;<PhoneInputDemo />
```

---

## API

### PhoneInput Props

| 参数             | 说明           | 类型                       | 默认值           |
| ---------------- | -------------- | -------------------------- | ---------------- |
| `value`          | 手机号值       | `string`                   | -                |
| `placeholder`    | 占位符         | `string`                   | `'请输入手机号'` |
| `maxlength`      | 最大输入长度   | `number`                   | `11`             |
| `onInput`        | 输入时触发     | `(value: string) => void`  | -                |
| `onRegionChange` | 区号变化时触发 | `(region: Region) => void` | -                |
| `className`      | 自定义类名     | `string`                   | `''`             |

### RegionSelector Props

| 参数              | 说明           | 类型                       | 默认值  |
| ----------------- | -------------- | -------------------------- | ------- |
| `visible`         | 是否显示选择器 | `boolean`                  | -       |
| `currentDialCode` | 当前区号       | `string`                   | `'+86'` |
| `onClose`         | 关闭回调       | `() => void`               | -       |
| `onSelect`        | 选择回调       | `(region: Region) => void` | -       |

### Region 数据结构

| 参数       | 说明          | 类型     |
| ---------- | ------------- | -------- |
| `code`     | 国家/地区代码 | `string` |
| `name`     | 国家/地区名称 | `string` |
| `dialCode` | 国际区号      | `string` |

### Events

| 事件名           | 说明           | 回调参数                   |
| ---------------- | -------------- | -------------------------- |
| `onInput`        | 输入时触发     | `(value: string) => void`  |
| `onRegionChange` | 区号变化时触发 | `(region: Region) => void` |
| `onClose`        | 关闭回调       | `() => void`               |
| `onSelect`       | 选择回调       | `(region: Region) => void` |

---

## 注意事项

1. **国际区号**：

   - 默认支持 20 个常用国家/地区的国际区号
   - 点击区号可以打开地区选择器

2. **搜索功能**：

   - 地区选择器支持按名称、代码或区号搜索
   - 搜索不区分大小写

3. **输入限制**：

   - 手机号输入框限制为数字类型
   - 默认最大长度为 11 位（中国手机号）

4. **事件回调**：

   - `onInput` 在手机号输入时触发
   - `onRegionChange` 在区号变化时触发

5. **样式定制**：
   - 通过 `className` 属性可以自定义输入框样式

---

## 支持的地区

组件默认支持以下 20 个常用国家/地区：

- 中国 (+86)
- 美国 (+1)
- 英国 (+44)
- 日本 (+81)
- 韩国 (+82)
- 台湾 (+886)
- 香港 (+852)
- 澳门 (+853)
- 新加坡 (+65)
- 马来西亚 (+60)
- 泰国 (+66)
- 菲律宾 (+63)
- 印度尼西亚 (+62)
- 越南 (+84)
- 澳大利亚 (+61)
- 新西兰 (+64)
- 德国 (+49)
- 法国 (+33)
- 印度 (+91)
- 巴西 (+55)

---

## 更新日志

### v1.0.0

- ✨ 初始发布
- ✨ 支持国际区号选择
- ✨ 支持地区搜索
- ✨ 支持输入限制
- ✨ 支持事件回调
- ✨ 支持样式定制


---


<PreviewIframe component="phoneinput" />
