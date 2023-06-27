# 侧边栏
创建侧边栏可以：
* 分组多篇相关文档
* 在每篇文档旁显示侧边栏
* 提供下一篇/上一篇按钮的分页导航

要在你的 Docusaurus 网站上使用侧边栏，只需两步：
1. 定义一个导出一组侧边栏对象的文件。
2. 直接将此对象传入 `@docusaurus/plugin-docs` 或通过 `@docusaurus/preset-classic` 传入。

```js title="docusaurus.config.js"
module.exports = {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
      },
    ],
  ],
};
```

## 侧边栏对象
侧边栏对象`type`分为五个
* `Doc`: 使用 `doc` 类型链接至文档页面，并分配链接文档至侧边栏
* `Link`: 使用 `link` 类型链接到任何非文档的页面（内部或外部链接
* `HTML`: 使用 `html` 类型在项目的 `<li>` 标签中渲染自定义 HTML
* `category`    使用 `category` 类型创建侧边栏项的层次结构。
* `autogenerated`   自动生成侧边栏

### Doc - 文档链接
```js
type SidebarItemDoc =
  // 普通语法
  | {
      type: 'doc';
      id: string;
      label: string; // 侧边栏标签文本
      className?: string; // 侧边栏标签类名
      customProps?: Record<string, unknown>; // 自定义属性
    }

  // 简写语法
  | string; // 文档 ID 简写
```

### Link - 任意页面链接
```js
type SidebarItemLink = {
  type: 'link';
  label: string;
  href: string;
  className?: string;
};
```

### HTML - 渲染自定义标记
```js
type SidebarItemHtml = {
  type: 'html';
  value: string;
  defaultStyle?: boolean; // 使用默认的菜单项目样式
  className?: string;
};
```

### Category - 创建分类层级
```js
type SidebarItemCategory = {
  type: 'category';
  label: string; // 侧边栏标签文字
  items: SidebarItem[]; // 侧边栏项目列表。
  className?: string;

  // 类别选项
  collapsible: boolean; // 把类别设置为可折叠
  collapsed: boolean; // 把类别设置为默认折叠或打开
};
```
```js title="sidebars.js"
module.exports = {
  mySidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        {
          type: 'doc',
          id: 'doc1',
        },
      ],
    },
    {
      type: 'category',
      label: 'Docusaurus',
      items: [
        {
          type: 'doc',
          id: 'doc2',
        },
        {
          type: 'doc',
          id: 'doc3',
        },
      ],
    },
    {
      type: 'link',
      label: 'Learn more',
      href: 'https://example.com',
    },
  ],
};
```