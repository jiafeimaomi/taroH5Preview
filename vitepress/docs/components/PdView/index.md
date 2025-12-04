# PdView 视图容器

## 元数据

| 属性     | 值                                       |
| -------- | ---------------------------------------- |
| 组件名   | PdView                                   |
| 描述     | 视图容器组件，支持背景图、事件处理等功能 |
| 跨端支持 | ✓ 小程序 ✓ RN ✓ H5                       |
| 引入路径 | `src/components/PdCore/PdView`           |
| 版本     | 1.0.0                                    |

---

## 组件说明

PdView 是一个基础的视图容器组件，基于 Taro 的 View 组件封装，提供了更丰富的功能和更好的跨端兼容性。

### 核心特性

- **背景图支持**：支持设置背景图片及不同的显示模式
- **事件处理**：支持点击、长按、触摸等事件
- **事件冒泡控制**：支持阻止事件冒泡
- **Flex 布局**：默认使用 flex 列布局
- **样式定制**：支持自定义类名和样式对象

---

## 基础用法

### 基础容器

```tsx
import PdView from '@/components/PdCore/PdView'

export default function Demo() {
  return (
    <PdView className='p-4'>
      <PdText>内容</PdText>
    </PdView>
  )
}
```

### 带背景图

```tsx
<PdView bg={{ image: 'https://example.com/image.jpg', size: 'cover' }}>
  <PdText>内容</PdText>
</PdView>
```

### 事件处理

```tsx
<PdView
  onClick={() => console.log('点击')}
  onLongPress={() => console.log('长按')}
>
  <PdText>可交互容器</PdText>
</PdView>
```

### 阻止事件冒泡

```tsx
<PdView catchClick onClick={() => console.log('不会冒泡的点击事件')}>
  <PdText>阻止冒泡</PdText>
</PdView>
```

---

## API

### Props

| 参数            | 说明               | 类型                | 默认值  |
| --------------- | ------------------ | ------------------- | ------- |
| `className`     | 自定义类名         | `string`            | -       |
| `style`         | 自定义样式对象     | `CSSProperties`     | -       |
| `bg`            | 背景属性配置       | `BgProps`           | -       |
| `children`      | 子元素             | `ReactNode`         | -       |
| `onClick`       | 点击事件           | `(e?: any) => void` | -       |
| `onTap`         | 点击事件（小程序） | `(e?: any) => void` | -       |
| `onLongPress`   | 长按事件           | `(e?: any) => void` | -       |
| `onTouchStart`  | 触摸开始事件       | `(e?: any) => void` | -       |
| `onTouchMove`   | 触摸移动事件       | `(e?: any) => void` | -       |
| `onTouchEnd`    | 触摸结束事件       | `(e?: any) => void` | -       |
| `onTouchCancel` | 触摸取消事件       | `(e?: any) => void` | -       |
| `catchClick`    | 是否阻止事件冒泡   | `boolean`           | `false` |

### BgProps

| 参数    | 说明           | 类型                                                            | 默认值    |
| ------- | -------------- | --------------------------------------------------------------- | --------- |
| `image` | 背景图片路径   | `string`                                                        | -         |
| `size`  | 背景图尺寸模式 | `'cover' \| 'contain' \| 'center' \| 'widthFix' \| 'heightFix'` | `'cover'` |

### Events

| 事件名          | 说明               | 回调参数            |
| --------------- | ------------------ | ------------------- |
| `onClick`       | 点击事件           | `(e?: any) => void` |
| `onTap`         | 点击事件（小程序） | `(e?: any) => void` |
| `onLongPress`   | 长按事件           | `(e?: any) => void` |
| `onTouchStart`  | 触摸开始事件       | `(e?: any) => void` |
| `onTouchMove`   | 触摸移动事件       | `(e?: any) => void` |
| `onTouchEnd`    | 触摸结束事件       | `(e?: any) => void` |
| `onTouchCancel` | 触摸取消事件       | `(e?: any) => void` |

---

## 注意事项

1. **默认布局**：PdView 默认使用 flex 列布局 (`flex flex-column`)
2. **背景图**：支持多种背景图显示模式，包括 cover、contain、center 等
3. **事件处理**：支持完整的触摸事件和点击事件处理
4. **事件冒泡**：通过 `catchClick` 属性可以阻止事件冒泡

---

## 更新日志

### v1.0.0

- ✨ 初始发布
- ✨ 支持背景图设置
- ✨ 支持完整的事件处理
- ✨ 支持阻止事件冒泡


---


<PreviewIframe component="view" />
