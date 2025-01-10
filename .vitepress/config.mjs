import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar'
import timeline from "vitepress-markdown-timeline";

const vitepressConfig = {
  base: '/pages/',
  title: "Markdown Memoirs",
  description: "Markdown Memoirs",
  appearance: 'dark',
  lastUpdated: false,
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', href: '/pages/favicon.ico' }]],
  srcDir: './docs',
  themeConfig: {
    nav: false,
    footer: false,
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    }
  },
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true
    },
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    },
    config: (md) => {
      md.use(timeline);
    }
  }
}

// https://vitepress.dev/reference/site-config
export default defineConfig(withSidebar(vitepressConfig, {
  // https://vitepress-sidebar.cdget.com/guide/options
  collapsed: true,
  includeFolderIndexFile: true,
  useTitleFromFileHeading: true,
  useTitleFromFrontmatter: true,
  useFolderTitleFromIndexFile: true,
  sortMenusByName: true,
  sortFolderTo: 'top',
  documentRootPath: '/docs'
}))
