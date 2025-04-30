<!-- src/views/ServicesView.vue -->
<script setup>
import { ref, onMounted } from 'vue'

const content = ref('正在加载服务信息…')

onMounted(async () => {
  try {
    // 统一用 new URL 拼接，自动去重斜杠
    const API     = new URL(import.meta.env.VITE_API_URL)
    const res     = await fetch(new URL('/api/services', API))
    const json    = await res.json()
    content.value = json.content
  } catch (err) {
    console.error(err)
    content.value = '❌ 获取服务信息失败，请检查后端是否启动'
  }
})
</script>

<template>
  <div style="padding:2rem">
    <h1>Services</h1>
    <p>{{ content }}</p>
  </div>
</template>
