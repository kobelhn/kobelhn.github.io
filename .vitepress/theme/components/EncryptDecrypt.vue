<template>
  <div class="secret-container">
    <p class="secret-content" :class="{
      decrypted: !!decryptedValue,
    }" @click="showOperate = !showOperate" v-html="renderStr"></p>
    <p class="secret-operate" v-if="!decryptedValue && showOperate">
      <input class="secret-input" v-model="password" type="password" placeholder="输入密码进行" />
      <button class="secret-btn" @click="decrypt">解密</button>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import CryptoJS from 'crypto-js'

const props = defineProps<{
  value: string
}>()

const password = ref('')
const decryptedValue = ref('')
const showOperate = ref(false)

const encryptedValue = ref(props.value)

const decrypt = () => {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedValue.value, password.value)
    decryptedValue.value = bytes.toString(CryptoJS.enc.Utf8)
    if (!decryptedValue.value) {
      throw new Error()
    }
  } catch (e) {
    alert('解密失败，请检查密码是否正确')
  }
}

const renderStr = computed(() => {
  const text = decryptedValue.value || encryptedValue.value
  if (!decryptedValue.value) {
    return text + '<strong>加密内容（点击文字进行解密）</strong>'
  }
  return text
})
</script>

<style scoped>
.secret-content {
  opacity: 0.6;
  word-break: break-all;
}

.secret-content.decrypted {
  opacity: 1;
}
.secret-operate {
  display: flex;
  align-items: center;
}
.secret-operate .secret-input {
  border: 1px solid #ccc;
  padding: 2px 5px;
  margin-right: 5px;
  border-radius: 4px;
  font-size: 12px;
  width: 90px;
  background: #FFF;
  color: #333;
}
.secret-operate .secret-btn {
  background: var(--vp-c-brand-1);
  color: #fff;
  border: none;
  padding: 2px 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
}
</style>
