// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// 定义一个变量存储共同的标题内容
const siteTitle = '数字商务与贸易研究中心';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: siteTitle,

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/domosite/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'm18150095612', // Usually your GitHub org/user name.
  projectName: 'domosite', // Usually your repo name.

  onBrokenLinks: 'ignore',  // Docusaurus 在检测到无效链接时的行为。
  onBrokenMarkdownLinks: 'ignore',  // Docusaurus 在检测到无效 Markdown 链接时的行为。

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:  // The theme configuration object to customize your site UI like navbar and footer.
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: siteTitle,
        logo: {
          alt: 'FUIST Logo',
          src: 'img/fuist_logo.svg',
          height: 32,
        },
        items: [
          {
            label: '学校首页', // 导航项的文本
            href: 'http://www.fzfu.edu.cn/',
            position: 'left', // 导航项的位置
          },
          {
            to: '/', // 这里的路径是相对于网站根目录的
            label: '中心首页', // 导航项的文本
            position: 'left', // 导航项的位置
          },
          {
            label: '队伍结构',
            href: 'http://gsx.fzfu.com/xygk/szdw.htm',
            position: 'left', // 导航项的位置
          },
          {
            to: '/#center-news', // 这里的路径是相对于网站根目录的
            label: '中心新闻', // 导航项的文本
            position: 'left', // 导航项的位置
          },
          {
            label: '科研工作', // 导航项的文本
            href: 'http://gsx.fzfu.com/kxyj.htm',
            position: 'left', // 导航项的位置
          },
          {
            to: '/', // 这里的路径是相对于网站根目录的
            label: '中心概况', // 导航项的文本
            position: 'left', // 导航项的位置
            className: 'disabled',
          },
          {
            to: '/', // 这里的路径是相对于网站根目录的
            label: '培训工作', // 导航项的文本
            position: 'left', // 导航项的位置
            className: 'disabled',
          },
          {
            to: '/', // 这里的路径是相对于网站根目录的
            label: '交流工作', // 导航项的文本
            position: 'left', // 导航项的位置
            className: 'disabled',
          },
          {
            to: '/', // 这里的路径是相对于网站根目录的
            label: '下载专区', // 导航项的文本
            position: 'left', // 导航项的位置
            className: 'disabled',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '相关链接',
            items: [
              {
                label: '福州外语外贸学院',
                href: 'http://www.fzfu.edu.cn/',
              },
              {
                label: '国际商学院-福州外语外贸学院',
                href: 'http://gsx.fzfu.com/',
              },
            ],
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
