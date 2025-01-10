// https://vitepress.dev/guide/custom-theme
import { h, onMounted, watch, nextTick } from 'vue'
import DefaultTheme from 'vitepress/theme'
import LinkCard from "./components/LinkCard.vue";
import HomeUnderLine from "./components/HomeUnderLine.vue";
import Confetti from "./components/Confetti.vue";
import XgPlayer from "./components/XgPlayer.vue";
import Explore from "./components/Explore.vue";
import EncryptDecrypt from "./components/EncryptDecrypt.vue";
import mediumZoom from 'medium-zoom';
import { useRoute } from 'vitepress';
import './style.css'
import './custom/index.css'
import "vitepress-markdown-timeline/dist/theme/index.css";
// https://vitepress.yiov.top/layout.html

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute();
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    onMounted(() => {
      initZoom();
    });
    watch(
        () => route.path,
        () => nextTick(() => initZoom())
    );
  },
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component("LinkCard", LinkCard);
    app.component("HomeUnderLine", HomeUnderLine);
    app.component("Confetti", Confetti);
    app.component("XgPlayer", XgPlayer);
    app.component("Explore", Explore);
    app.component("EncryptDecrypt", EncryptDecrypt);
  }
}
