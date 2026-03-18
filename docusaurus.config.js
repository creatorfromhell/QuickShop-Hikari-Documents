// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const DefaultLocale = 'en-US';
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'QuickShop-Hikari Docs',
  tagline: 'QuickShop-Hikari User Documents',
  url: 'https://quickshop-community.github.io/',
  baseUrl: '/QuickShop-Hikari-Documents',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'QuickShop-Community', // Usually your GitHub org/user name.
  projectName: 'QuickShop-Hikari-Documents', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en-US',
    //locales: ['af-ZA', 'ar-SA', 'bg-BG', 'ca-ES', 'cs-CZ', 'da-DK', 'de-DE', 'el-GR', 'en-US', 'es-ES', 'fi-FI', 'fr-FR', 'he-IL', 'hi-IN', 'hu-HU', 'it-IT', 'ja-JP', 'ko-KR', 'lt-LT', 'nl-NL', 'no-NO', 'pl-PL', 'pt-BR', 'pt-PT', 'ro-RO', 'ru-RU', 'sr-Cyrl', 'sr-SP', 'sv-SE', 'th-TH', 'tr-TR', 'uk-UA', 'vi-VN', 'zh-CN', 'zh-HK', 'zh-TW'],
    locales: [ 'de-DE', 'en-US', 'ja-JP', 'zh-CN', 'zh-HK', 'zh-TW'],
    localeConfigs: {
    'de-DE': {
      label: 'Deutsch',
    },
    'en-US': {
      label: 'English',
    },
    'ja-JP': {
      label: '日本語',
    },
    'zh-CN': {
      label: '简体中文',
    },
    'zh-HK': {
      label: '繁體中文（中國香港特別行政區）',
    },
    'zh-TW': {
      label: '繁體中文（中國臺灣）',
    },
  },
},

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        hashed: true,
        language: ["en", "zh", "ja", "de"],
        // ```
      }),
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({ locale, versionDocsDirPath, docPath }) => {
            if (locale !== DefaultLocale) {
              return `https://crowdin.com/project/quickshop-hikari-documents/${locale}`;
            }
            return `https://github.com/QuickShop-Community/QuickShop-Hikari-Documents/edit/master/${versionDocsDirPath}/${docPath}`;
          },
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
      title: '',
      items: [
        // LEFT SIDE NAV LINKS
        {
          type: 'doc',
          docId: 'intro',          // main landing doc
          label: 'Home',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'setup/install', // adjust if your path is different
          label: 'Getting Started',
          position: 'left',
        },
        {
          type: 'doc',
          docId: '/category/addon', // /docs/category/addon
          label: 'Addons',
          position: 'left',
        },
        {
          type: 'doc',
          docId: '/category/compatibility-modules', // /docs/category/compatibility-modules
          label: 'Compatibility',
          position: 'left',
        },

        // Docusaurus locale dropdown (keep this!)
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          {
            title: 'Get QuickShop-Hikari',
            items: [
              {
                label: 'Modrinth',
                href: 'https://modrinth.com/mod/quickshop-hikari',
              },
              {
                label: 'SpigotMC',
                href: 'https://www.spigotmc.org/resources/100125',
              },
              {
                label: 'CodeMC CI',
                href: 'https://ci.codemc.io/job/Ghost-chu/job/QuickShop-Hikari',
              },
              {
                label: 'Github Releases',
                href: 'https://github.com/QuickShop-Community/QuickShop-Hikari',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/Bu3dVtmsD3',
              },
              {
                label: 'Github',
                href: 'https://github.com/QuickShop-Community/QuickShop-Hikari/discussions',
              },
              {
                label: 'SpigotMC',
                href: 'https://www.spigotmc.org/threads/547268',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/QuickShop-Community/QuickShop-Hikari',
              },
              {
                label: 'Paste Viewer',
                href: 'https://ghost-chu.github.io/quickshop-hikari-paste-viewer',
              },
            ],
          },
        ],
        copyright: `All contents are licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>. Built with Docusaurus.`,
      },
      colorMode: {
        defaultMode: 'dark', // or 'dark', depending on your preference
        disableSwitch: true,
        respectPrefersColorScheme: false, // Optional: set to false if you don't want to respect system preferences
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
