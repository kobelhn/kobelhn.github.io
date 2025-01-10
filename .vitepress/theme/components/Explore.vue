<template>
  <div>
    <div class="fixed-button">
      <div class="ripple-button" @click="toggle">{{ showContent ? 'Close Explore' : 'Open Explore' }}</div>
    </div>
    <div class="fixed-mask" v-if="showContent">
      <slot name="default">
        <div class="chat-box-container">
          <div class="chat-box">
            <iframe
                src="https://web.chatboxai.app/"
                width="100%"
                height="100%"
            ></iframe>
          </div>
          <ul style="flex: 0.3; font-size: 12px" @click.stop>
            <li>API KEY: sk-F8YHDwXvtX7rww0mFiuhOf7z6CTBDaxGSVmVnaJAzovvPIvm</li>
            <li>API KEY: sk-4w2EmL0qnblp9rU2bH6Ek7L4CGaXrxNxgFup9UuyQGMPNPDt</li>
            <li>HOST1: https://api.chatanywhere.com.cn</li>
            <li>HOST2: https://api.chatanywhere.tech</li>
            <li>支持：gpt-3.5-turbo, embedding, gpt-4o-mini, gpt-4（每日限制 3 次）</li>
          </ul>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showContent = ref(false)

const toggle = () => {
  showContent.value = !showContent.value
}
</script>

<style scoped>
.fixed-button {
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 999;
  cursor: pointer;
  font-size: 12px;
}
.fixed-mask {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 998;
  display: flex;
  justify-content: center;
  align-items: center;
  .chat-box-container {
    width: calc(100% - 40px);
    height: 100%;
    display: flex;
    color: #fff;
    justify-content: flex-end;
    .chat-box {
      flex: 0.7;
      height: 100%;
    }
  }
}

</style>
