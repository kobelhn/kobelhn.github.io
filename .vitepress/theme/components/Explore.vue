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
          <div style="flex: 0.3; font-size: 12px; padding: 10px" @click.stop>
            <encrypt-decrypt value="U2FsdGVkX1/bfrloCdg7s4U06f/BPizFXhUEUeAbF7+33OMMUfRu0vK0s/L7PNqwvKBHB34UF+y3JCsOD6Qf1ekiRUQPxh9N03+42qJRnlc=" />
            <encrypt-decrypt value="U2FsdGVkX19Ooxn0ZG8USBFunapcBNC3BiTqVvpvXX4MhnJRriNEF+5f1xZdd5jUD7KK8arsaw8g9QxLECNuWtJiYoGfWXYwuyLCsktbHbo=" />
            <div>HOST1: https://api.chatanywhere.com.cn</div>
            <div>HOST2: https://api.chatanywhere.tech</div>
            <div>支持：gpt-3.5-turbo, embedding, gpt-4o-mini, gpt-4（每日限制 3 次）</div>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup>
import EncryptDecrypt from "./EncryptDecrypt.vue";
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
    width: 100%;
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
