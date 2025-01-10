<template>
  <div class="secret-container">
    <div class="secret-top">
      <span style="margin-right: 10px">{{ label || 'Secret Content' }}</span>
      <input class="secret-input" v-model="password" type="password" placeholder="输入密码进行" />
      <button class="secret-btn" @click="decrypt">解密</button>
    </div>
    <div class="secret-content">{{ decryptedValue || encryptedValue }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import CryptoJS from 'crypto-js'

const props = defineProps<{
  value: string,
  label: string
}>()

const password = ref('')
const decryptedValue = ref('')

const encryptedValue = ref(props.value)

const decrypt = () => {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedValue.value, password.value)
    decryptedValue.value = bytes.toString(CryptoJS.enc.Utf8)
  } catch (e) {
    alert('Decryption failed. Please check your password.')
  }
}
</script>

<style scoped>
.secret-container {
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
  margin: 10px 0;
}
.secret-top {
  margin-bottom: 10px;
}
.secret-content {
  padding: 5px;
  line-height: 20px;
  font-size: 14px;
  word-break: break-all;
  user-select: none;
}
.secret-top .secret-input {
  border: 1px solid #ccc;
  padding: 5px;
  margin-right: 5px;
  min-width: 200px;
  border-radius: 4px;
}
.secret-top .secret-btn {
  background: var(--vp-c-brand-1);
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
