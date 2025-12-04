# PdButton 按钮组件

## 元数据

| 属性     | 值                                     |
| -------- | -------------------------------------- |
| 组件名   | PdButton                               |
| 描述     | 通用按钮组件，支持多种类型、尺寸和状态 |
| 跨端支持 | ✓ 小程序 ✓ RN ✓ H5                     |
| 引入路径 | `src/components/PdCore/PdButton`       |
| 版本     | 1.0.0                                  |

---

## 组件说明

PdButton 是一个跨端通用按钮组件，基于 Taro 框架封装，支持小程序、React Native 和 H5 三端平台。

### 核心特性

- **跨端兼容**：自动适配小程序、RN、H5 三个平台
- **多种类型**：支持 `default`、`primary`、`warn` 三种按钮类型
- **丰富的尺寸**：提供 `default` 和 `mini` 两种尺寸
- **完整状态**：支持禁用、加载中等多种状态
- **开放能力**：集成微信开放能力如获取手机号、用户信息等
- **灵活样式**：支持自定义类名和样式对象

### 工作原理

该组件采用平台适配层封装，实现了逻辑与 UI 的分离：

- **小程序端** (`PdButton.tsx`)：基于 Taro 的 `Button` 组件
- **RN 端** (`PdButton.rn.tsx`)：基于 RN 的 `TouchableOpacity` 和 `Text` 组件
- **统一接口**：通过 `onClick/onPress` 统一处理点击事件

---

## 基础用法

### 默认按钮

```tsx
import PdButton from '@/components/PdCore/PdButton'

export default function Demo() {
  return <PdButton onClick={() => console.log('clicked')}>点击按钮</PdButton>
}
```

### 主要按钮

```tsx
<PdButton type='primary' onClick={handleSubmit}>
  提交
</PdButton>
```

### 警告按钮

```tsx
<PdButton type='warn' onClick={handleDelete}>
  删除
</PdButton>
```

### 禁用状态

```tsx
<PdButton disabled>禁用按钮</PdButton>
```

### 加载状态

```tsx
const [loading, setLoading] = useState(false)

const handleAsync = async () => {
  setLoading(true)
  await new Promise((resolve) => setTimeout(resolve, 2000))
  setLoading(false)
}

return (
  <PdButton loading={loading} onClick={handleAsync}>
    {loading ? '加载中...' : '点击加载'}
  </PdButton>
)
```

### 小尺寸按钮

```tsx
<PdButton size="mini">小按钮</PdButton>
<PdButton type="primary" size="mini">主要</PdButton>
<PdButton type="warn" size="mini">警告</PdButton>
```

### 获取用户手机号

```tsx
const handleGetPhone = (e: any) => {
  const { errMsg, code, encryptedData, iv } = e.detail
  if (code === 0) {
    console.log('获取手机号成功:', encryptedData, iv)
  } else {
    console.log('获取手机号失败')
  }
}

return (
  <PdButton openType='getPhoneNumber' onGetPhoneNumber={handleGetPhone}>
    获取手机号
  </PdButton>
)
```

### 获取用户信息

```tsx
const handleGetUserInfo = (e: any) => {
  const { userInfo, errMsg } = e.detail
  if (userInfo) {
    console.log('用户信息:', userInfo)
  }
}

return (
  <PdButton openType='getUserInfo' onGetUserInfo={handleGetUserInfo}>
    授权登录
  </PdButton>
)
```

### 自定义样式

```tsx
<PdButton
  className='custom-btn'
  style={{ backgroundColor: '#FF6B6B', color: '#fff' }}
>
  自定义样式
</PdButton>
```

### 跨端兼容示例

```tsx
import PdButton from '@/components/PdCore/PdButton'

export default function CrossPlatformDemo() {
  const handlePress = () => {
    console.log('按钮被点击')
  }

  return (
    <>
      {/* onClick/onPress 会自动识别平台 */}
      <PdButton onClick={handlePress}>点击按钮</PdButton>

      {/* 也可以两个都提供，会优先使用 onPress */}
      <PdButton
        onClick={() => console.log('小程序端')}
        onPress={() => console.log('RN 端')}
      >
        平台感知
      </PdButton>
    </>
  )
}
```

### 自定义组件 Demo

#### 完整 Demo 示例

```tsx
import PdButtonDemo from './demo/index'

// 在文档中直接使用 Demo 组件
;<PdButtonDemo />
```

```tsx
import { useState } from 'react'
import PdButton from '@/components/PdCore/PdButton'

interface DemoProps {
  type?: 'default' | 'primary' | 'warn'
  size?: 'default' | 'mini'
  loading?: boolean
  disabled?: boolean
  showAll?: boolean
}

export default function PdButtonDemo(props: DemoProps) {
  const {
    type = 'default',
    size = 'default',
    loading: initialLoading = false,
    disabled = false,
    showAll = false,
  } = props

  const [loading, setLoading] = useState(initialLoading)
  const [clickCount, setClickCount] = useState(0)

  const handleClick = () => {
    setClickCount(clickCount + 1)
    console.log(`按钮被点击，共 ${clickCount + 1} 次`)
  }

  const handleAsyncClick = async () => {
    setLoading(true)
    try {
      // 模拟异步操作
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log('异步操作完成')
    } finally {
      setLoading(false)
    }
  }

  // 单一参数示例
  if (!showAll) {
    return (
      <div
        style={{
          padding: '20px',
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
        }}
      >
        <PdButton
          type={type}
          size={size}
          loading={loading}
          disabled={disabled}
          onClick={handleClick}
        >
          点击按钮 ({clickCount})
        </PdButton>
      </div>
    )
  }

  // 展示所有参数组合示例
  return (
    <div style={{ padding: '20px' }}>
      {/* 基础示例 */}
      <section style={{ marginBottom: '40px' }}>
        <h3>基础示例</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <PdButton onClick={handleClick}>默认按钮 ({clickCount})</PdButton>
          <PdButton type='primary' onClick={handleClick}>
            主要按钮 ({clickCount})
          </PdButton>
          <PdButton type='warn' onClick={handleClick}>
            警告按钮 ({clickCount})
          </PdButton>
        </div>
      </section>

      {/* 按钮尺寸 */}
      <section style={{ marginBottom: '40px' }}>
        <h3>按钮尺寸</h3>
        <div
          style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <PdButton size='default' onClick={handleClick}>
            默认尺寸
          </PdButton>
          <PdButton size='mini' onClick={handleClick}>
            迷你尺寸
          </PdButton>
          <PdButton type='primary' size='default' onClick={handleClick}>
            主要-默认
          </PdButton>
          <PdButton type='primary' size='mini' onClick={handleClick}>
            主要-迷你
          </PdButton>
        </div>
      </section>

      {/* 按钮状态 */}
      <section style={{ marginBottom: '40px' }}>
        <h3>按钮状态</h3>
        <div
          style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <PdButton disabled>禁用按钮</PdButton>
          <PdButton type='primary' disabled>
            禁用主要按钮
          </PdButton>
          <PdButton loading={loading} onClick={handleAsyncClick}>
            {loading ? '加载中...' : '异步操作'}
          </PdButton>
          <PdButton type='primary' loading={loading} onClick={handleAsyncClick}>
            {loading ? '加载中...' : '异步主要'}
          </PdButton>
        </div>
      </section>

      {/* 自定义样式 */}
      <section style={{ marginBottom: '40px' }}>
        <h3>自定义样式</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <PdButton
            style={{
              backgroundColor: '#FF6B6B',
              color: '#fff',
              borderRadius: '20px',
            }}
            onClick={handleClick}
          >
            圆角红色按钮
          </PdButton>
          <PdButton
            style={{
              backgroundColor: '#4ECDC4',
              color: '#fff',
              fontSize: '16px',
              padding: '12px 30px',
            }}
            onClick={handleClick}
          >
            自定义青色
          </PdButton>
          <PdButton
            className='custom-gradient'
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: '#fff',
            }}
            onClick={handleClick}
          >
            渐变背景
          </PdButton>
        </div>
      </section>

      {/* 不同宽度 */}
      <section style={{ marginBottom: '40px' }}>
        <h3>不同宽度</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <PdButton
            style={{ width: '100%' }}
            type='primary'
            onClick={handleClick}
          >
            100% 宽度按钮
          </PdButton>
          <PdButton style={{ width: '200px' }} onClick={handleClick}>
            200px 宽度
          </PdButton>
          <div style={{ display: 'flex', gap: '10px' }}>
            <PdButton style={{ flex: 1 }} onClick={handleClick}>
              Flex 1
            </PdButton>
            <PdButton style={{ flex: 1 }} type='primary' onClick={handleClick}>
              Flex 1
            </PdButton>
          </div>
        </div>
      </section>

      {/* 微信开放能力 */}
      <section style={{ marginBottom: '40px' }}>
        <h3>微信开放能力</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <PdButton
            openType='getPhoneNumber'
            onGetPhoneNumber={(e) => console.log('获取手机号:', e)}
          >
            获取手机号
          </PdButton>
          <PdButton
            openType='getUserInfo'
            onGetUserInfo={(e) => console.log('获取用户信息:', e)}
          >
            获取用户信息
          </PdButton>
          <PdButton
            openType='contact'
            onContact={(e) => console.log('客服消息:', e)}
          >
            联系客服
          </PdButton>
          <PdButton openType='share'>分享</PdButton>
        </div>
      </section>

      {/* 组合示例 */}
      <section style={{ marginBottom: '40px' }}>
        <h3>组合示例</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <PdButton
            type='primary'
            size='mini'
            style={{ backgroundColor: '#667eea' }}
            onClick={handleClick}
          >
            蓝色迷你
          </PdButton>
          <PdButton type='warn' size='mini' disabled>
            禁用警告迷你
          </PdButton>
          <PdButton
            type='primary'
            loading={loading}
            style={{ width: '150px' }}
            onClick={handleAsyncClick}
          >
            {loading ? '保存中...' : '保存'}
          </PdButton>
        </div>
      </section>
    </div>
  )
}
```

#### 按参数调用示例

```tsx
// 示例 1: 展示默认按钮
<PdButtonDemo type="default" />

// 示例 2: 展示主要按钮，迷你尺寸
<PdButtonDemo type="primary" size="mini" />

// 示例 3: 展示禁用状态
<PdButtonDemo disabled={true} />

// 示例 4: 展示加载状态
<PdButtonDemo loading={true} />

// 示例 5: 展示所有组合
<PdButtonDemo showAll={true} />

// 示例 6: 警告按钮 + 默认尺寸
<PdButtonDemo type="warn" size="default" />
```

---

## API

### Props

| 参数               | 说明                                            | 类型                                                                                                      | 默认值      |
| ------------------ | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ----------- |
| `children`         | 按钮文本内容或子组件                            | `ReactNode`                                                                                               | -           |
| `type`             | 按钮类型                                        | `'default' \| 'primary' \| 'warn'`                                                                        | `'default'` |
| `size`             | 按钮尺寸                                        | `'default' \| 'mini'`                                                                                     | `'default'` |
| `disabled`         | 是否禁用                                        | `boolean`                                                                                                 | `false`     |
| `loading`          | 是否加载中，加载中时禁用点击                    | `boolean`                                                                                                 | `false`     |
| `className`        | 自定义类名                                      | `string`                                                                                                  | -           |
| `style`            | 自定义样式对象                                  | `CSSProperties`                                                                                           | -           |
| `onClick`          | 点击事件（小程序/H5 端）                        | `(e?: any) => void`                                                                                       | -           |
| `onPress`          | 点击事件（RN 端）                               | `(e?: any) => void`                                                                                       | -           |
| `openType`         | 微信开放能力                                    | `'contact' \| 'share' \| 'getPhoneNumber' \| 'getUserInfo' \| 'launchApp' \| 'openSetting' \| 'feedback'` | -           |
| `onGetPhoneNumber` | 获取用户手机号回调（openType="getPhoneNumber"） | `(e?: any) => void`                                                                                       | -           |
| `onGetUserInfo`    | 获取用户信息回调（openType="getUserInfo"）      | `(e?: any) => void`                                                                                       | -           |
| `onContact`        | 客服消息回调（openType="contact"）              | `(e?: any) => void`                                                                                       | -           |
| `sessionFrom`      | 会话来源（openType="contact"）                  | `string`                                                                                                  | -           |

### Events

| 事件名             | 说明                      | 回调参数                                                             |
| ------------------ | ------------------------- | -------------------------------------------------------------------- |
| `onClick`          | 按钮点击事件（小程序/H5） | `(e?: any) => void`                                                  |
| `onPress`          | 按钮点击事件（RN）        | `(e?: any) => void`                                                  |
| `onGetPhoneNumber` | 用户授权获取手机号        | `(e: { code: number; encryptedData?: string; iv?: string }) => void` |
| `onGetUserInfo`    | 用户授权获取用户信息      | `(e: { userInfo?: UserInfo; errMsg?: string }) => void`              |
| `onContact`        | 客服消息的回调            | `(e?: any) => void`                                                  |

### Types

```typescript
interface PdButtonProps {
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  onPress?: (e?: any) => void
  onClick?: (e?: any) => void
  type?: 'default' | 'primary' | 'warn'
  size?: 'default' | 'mini'
  disabled?: boolean
  loading?: boolean
  openType?:
    | 'contact'
    | 'share'
    | 'getPhoneNumber'
    | 'getUserInfo'
    | 'launchApp'
    | 'openSetting'
    | 'feedback'
  onGetPhoneNumber?: (e?: any) => void
  onGetUserInfo?: (e?: any) => void
  onContact?: (e?: any) => void
  sessionFrom?: string
}
```

---

## 注意事项

### 平台适配

- **小程序端**：使用原生的微信开放能力（openType）
- **RN 端**：原子类样式通过 `parseAtomicClasses` 自动转换为 RN 样式
- **H5 端**：完全兼容 Taro Button 的所有功能

### 事件处理

- 同时提供 `onClick` 和 `onPress` 时，优先使用 `onPress`
- RN 端默认在按下时有 70% 的不透明度反馈（`activeOpacity={0.7}`）

### 样式覆盖

- 原子类样式 → 自定义 `style` 优先级从低到高
- 自定义 `style` 会覆盖原子类定义的样式
- RN 端需使用原子类或 RN 样式对象，不支持 CSS 类名

### 开放能力

- `openType` 仅在微信小程序中有效
- 使用用户授权相关的 openType 时，需确保用户已授予相关权限
- 获取手机号需要用户有 `<button open-type="getPhoneNumber">` 的点击授权

---

## 主题定制

通过自定义样式对象自定义按钮主题：

```tsx
<PdButton
  type='primary'
  style={{
    backgroundColor: '#1989fa',
    borderRadius: '4px',
    color: '#fff',
    fontSize: '16px',
    padding: '10px 20px',
  }}
>
  自定义主题
</PdButton>
```

或使用 SCSS 原子类：

```tsx
// RN 端使用原子类
<PdButton className='bg-blue-500 text-white rounded-lg px-24 py-12'>
  使用原子类
</PdButton>
```

---

## 常见问题

### Q: RN 端如何修改按钮样式？

A: 在 RN 端，使用 `style` 属性传入 React Native 样式对象，或使用原子类。小程序端可使用 CSS 类名。

```tsx
<PdButton
  style={{ backgroundColor: '#FF6B6B', paddingHorizontal: 20 }}
  className='custom-class' // 小程序端有效
>
  按钮文本
</PdButton>
```

### Q: 如何实现异步加载按钮？

A: 使用 `loading` 属性控制加载状态：

```tsx
const [loading, setLoading] = useState(false)

const handleAsync = async () => {
  setLoading(true)
  try {
    await apiCall()
  } finally {
    setLoading(false)
  }
}

return (
  <PdButton loading={loading} onClick={handleAsync}>
    保存
  </PdButton>
)
```

### Q: 如何禁用按钮但仍然响应点击？

A: `disabled` 属性会禁用按钮交互。如需自定义禁用行为，不使用 `disabled` 而在回调中处理逻辑。

### Q: openType 为何在 RN 端无法使用？

A: openType 是微信小程序特有的开放能力，仅在小程序环境有效。RN 端需使用相应的原生模块实现同等功能。

---

## 相关组件

- [PdView](../PdView/) - 视图容器
- [PdText](../PdText/) - 文本组件
- [PdInput](../PdInput/) - 输入框组件

---

## 更新日志

### v1.0.0 (2024)

- ✨ 初始发布
- ✨ 支持小程序、RN、H5 三端
- ✨ 支持微信开放能力
- ✨ 完整的类型定义


---


<PreviewIframe component="button" />
