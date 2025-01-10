<template>
  <div id="mse"></div>
</template>

<script setup lang="ts">
import Player from "xgplayer";
import "xgplayer/dist/index.min.css";
import { onMounted } from 'vue'

interface propsType {
  url: string,
  poster: string,
  autoplay: boolean
}

const props = withDefaults(defineProps<propsType>(), {
  url: '',
  poster: ''
})

onMounted(() => {
  new Player({
    id: 'mse', //占位id
    volume: 0, // 默认静音z
    lang: "zh", //设置中文
    autoplay: true, //自动播放
    autoplayMuted: true, //自动播放静音
    fluid: true,  // 流式布局，自动宽高比
    controls: true, //开启控制栏，设为false即隐藏
    leavePlayerTime: 0, //鼠标离开控制栏隐藏延时时间，默认3000ms
    download: true, //开启下载
    keyShortcut: true, //开启热键
    url: props.url, //传入的url
    poster: props.poster, //传入的视频封面
    start: {
      isShowPause: true //暂停显示播放按钮
    }
  })

})

</script>

<style scoped>
#mse {
  flex: auto;
}
</style>
