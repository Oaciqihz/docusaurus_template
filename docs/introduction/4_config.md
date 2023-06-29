# 配置
Docusaurus 对配置文件有着独特见解。 我们鼓励你将站点信息集中到一处。 我们会维护这个文件的每个字段，你可以在站点的任何地方访问数据对象。

悉心维护的 `docusaurus.config.js` 能够让你在个性化站点的同时，帮助你、你的协作者、以及开源项目贡献者专注于文档本身。

## `docusaurus.config.js` 配置
Docusaurus 配置可被分为这几类:

* 站点元数据
    - ** title **: 网站标题。 会用于页面元数据中，以及浏览器选项卡标题。
    - ** url **: 网站网址。例: `https://decert.me/`
    - ** baseUrl **: 站点的base URL。可以被看作是主机名后的路径。例: `/`、`/tutorial`
* 部署配置
    - ** organizationName **: 拥有部署仓库的 GitHub 用户或组织。
    - ** projectName **: 部署仓库的名字。
    - ** deploymentBranch **: 部署分支的名字。
* 主题、插件和预设配置
    - ** plugins(插件配置) **: [docusaurus 内置插件](https://docusaurus.io/zh-CN/docs/api/plugins)、外置插件需下载后再配置。
    ```js title="docusaurus.config.js"
    plugins: [
        require.resolve('./sitePlugin'),
        "docusaurus-plugin-sass", 
        "docusaurus-node-polyfills",
    ],
    ```
    ```js title="sitePlugin.js"
    // eslint-disable-next-line
    module.exports = function (context, options) {
        return {
        name: 'custom-docusaurus-plugin',
        // eslint-disable-next-line
        configureWebpack(config, isServer, utils) {
            return {
            resolve: {
                alias: {
                path: require.resolve('path-browserify'),
                },
                fallback: {
                fs: false,
                http: require.resolve('stream-http'),
                https: require.resolve('https-browserify'),
                crypto: require.resolve("crypto-browserify"),
                stream: require.resolve("stream-browserify"),
                assert: require.resolve("assert")
                },
            },
            };
        },
        };
    };
    ```
    - ** themeConfig(主题配置) **: 用于自定义站点UI (如导航栏和页脚) 的主题配置对象。
    ```js title="docusaurus.config.js"
        themeConfig: {
        docs: {
        sidebar: {
            hideable: false,
            autoCollapseCategories: false,
        },
        },
        colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
        },
        navbar: {
        title: '网站标题',
        logo: {
            alt: '网站图标',
            src: 'img/logo.svg',
            width: 32,
            height: 32,
        },
        items: [
            {
            to: 'docs/docusaurus.config.js',
            activeBasePath: 'docs',
            label: 'docusaurus.config.js',
            position: 'left',
            },
            // ……其他链接
        ],
        },
        footer: {
        style: 'dark',
        links: [
            {
            title: '文档',
            items: [
                {
                label: '文档',
                to: 'docs/doc1',
                },
            ],
            },
            // ……其他链接
        ],
        logo: {
            alt: 'Meta 开源图标',
            src: 'img/meta_oss_logo.png',
            width: 160,
            height: 51,
        },
        copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`, // 你也可以在这里写自定义的 HTML
        },
    }
    ```
* 自定义配置