# 示例

## Doc
```js title="sidebars.js"
module.exports = {
  mySidebar: [
    // 普通语法：
    {
      type: 'doc',
      id: 'doc1', // 文档 ID
      label: 'Getting started', // 侧边栏标签
    },

    // 简写语法：
    'doc2', // 文档 ID
  ],
};
```

## Link
```js title="sidebars.js"
module.exports = {
  mySidebar: [
     // 外部链接
    {
      type: 'link',
      label: 'Facebook', // 链接标签
      href: 'https://facebook.com', // 外部 URL
    },

    // 内部链接
    {
      type: 'link',
      label: 'Home', // 链接标签
      href: '/', // 内部路径
    },
  ],
};
```
## HTML
```js title="sidebars.js"
module.exports = {
  mySidebar: [
    {
      type: 'html',
      value: '<h1>HTML Type</h1>', // 要渲染的 HTML
      defaultStyle: true, // 使用默认的菜单项目样式
    }
  ],
};
```
## Category 
```js title="sidebars.js"
module.exports = {
  mySidebar: [
    {
      type: 'category',
      label: 'Category Type',
      link: {
        type: 'generated-index',
        title: 'Category',
        description: '描述',
        slug: '/category/docusaurus-guides'
      },
      items: [
        {
          type: 'doc',
          id: 'tmpl/category1',
        },
        {
          type: 'doc',
          id: 'tmpl/category2',
        }
      ],
    }
  ],
};
```