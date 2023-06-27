# 安装流程

## 要求

* [Node.js](https://nodejs.org/en/download) v16.14 或以上版本（你可以运行 node -v 命令查看版本号）。 你可以用 nvm 来管理同一机器上的多个 Node 版本。
    - 安装 Node.js 时，建议勾选所有和依赖相关的选项。


## 项目脚手架

```js
npx create-docusaurus@latest [项目名] [模板]
// 例: npx create-docusaurus@latest my-website classic 
```

## 项目结构
假设你选择了经典模板并将网站命名为 `my-website`，你将会在新目录 `my-website/`下看到下列文件：
```
my-website
├── blog
│   ├── 2019-05-28-hola.md
│   ├── 2019-05-29-hello-world.md
│   └── 2020-05-30-welcome.md
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   └── mdx.md
├── src
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── styles.module.css
│       └── index.js
├── static
│   └── img
├── docusaurus.config.js
├── package.json
├── README.md
├── sidebars.js
└── yarn.lock
```