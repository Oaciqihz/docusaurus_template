# Docusaurus 介绍
`版本：2.3.1`

⚡️ Docusaurus 会帮助你在极短时间内搭建漂亮的文档网站。

💸 自己造轮子是一件苦差事。 现在，你可以专注于内容创作，只需编写 Markdown 文件即可。

💥 想深入了解吗？ 来试试包括文档分版、本地化、自定义搜索、个性化主题在内的进阶功能特性吧！

💅 看看我们最爱的 Docusaurus 网站来获取灵感，并读读其他人的使用感言吧！

🧐 Docusaurus 是一款静态站点生成器。 可以搭建带有快速客户端导航的单页应用，充分利用了 React，让你的网站具有交互能力。 它提供了开箱即用的文档功能，不过也可用于搭建各种网站（个人网站、产品、博客、营销主页，等等）。

## 快速搭建 ⏱️

安装 Node.js，然后创建一个新 Docusaurus 网站：

```
npx create-docusaurus@latest my-website classic
```

运行网站: 
```
npx docusaurus start
```

## 特性

* React:
    - 使用 React 实现扩展与自定义
    - 提供你自己的 React 组件，从而完全掌控网站的浏览体验
* SEO 友好:
    - 为每条路径静态生成 HTML 文件
    - 为每个页面做单独搜索引擎优化，帮助用户快速到达官方文档，解决当前问题
* MDX支持:
    - 使用 JSX 和 React 撰写交互组件，并将其嵌入 Markdown
* 搜索:
    - 全站均可被搜索
    
......

## 与其他工具对比

在所有的静态网站生成器中，Docusaurus 独树一帜，专注于文档网站，拥有诸多开箱即用的功能。

我们同时也研究了其他一些主流静态站点生成器，想和你一起分享我们比较后的看法，希望能帮你在多种选择中做出判断。

### Gatsby

[Gatsby](https://www.gatsbyjs.com/) 自带诸多功能，而且拥有丰富的插件生态，足以胜任 Docusaurus 的所有功能。 当然，这带来了较陡的学习曲线。 Gatsby 在许多方面做得都很出色，适合构建许多类型的网站。 另一方面，Docusaurus 力图将一件事做到尽善尽美——成为最好的内容撰写与发布工具。

GraphQL 是 Gatsby 的核心，但搭建 Gatsby 网站不一定要用到它。 而在大多数静态网站中，你更不需要 GraphQL 所提供的灵活性。

Docusaurus 2 的许多方面都被 Gatsby 的出色之处所启发，这是一个优秀的替代品。

Docz 是一个 Gatsby 主题，用于搭建文档网站。 它的功能与 Docusaurus 相比要匮乏。

### Next.js

[Next.js](https://nextjs.org/) 是另一款极为热门的 React 混合框架。 它可以帮助你构建出色的文档网站，但它并不着重于文档功能本身，而且需要你手动实现 Docusaurus 所自带的功能。

### Hugo

[hugo](https://gohugo.io/) Hugo是一个静态网站生成器，它使用Go语言编写，旨在快速生成高性能的静态网站。它采用简单的文件结构和模板系统，可以轻松地创建和管理内容，并将其转换为静态HTML页面。

### VuePress

[VuePress](https://vuepress.vuejs.org/) 与 Docusaurus 有许多共同点——都非常专注于以内容为中心的网站，且都提供量身定制的文档特性。 但是，VuePress 是 Vue 驱动的，而 Docusaurus 则是 React 驱动的。 如果你想要一个基于 Vue 的解决方案，VuePress 是个不错的选择。

### MkDocs

[MkDocs](https://www.mkdocs.org/) 是一款受欢迎的 Python 静态站点生成器，其设计理念与 Docusaurus 类似。

如果你不需要单页应用，也不打算利用 React 的话，这是个好选择。

### Docsify

[Docsify](https://docsify.js.org/#/?id=docsify)让你能轻松创建文档网站，但它并不是一款静态网站生成器，而且对搜索引擎不太友好。