<!-- src/views/ContactView.vue -->
<script setup>
import { ref, onMounted } from 'vue'

const content = ref('正在加载联系方式…')

onMounted(async () => {
  try {
    const API     = new URL(import.meta.env.VITE_API_URL)
    const res     = await fetch(new URL('/api/contact', API))
    const json    = await res.json()
    content.value = json.content
  } catch (err) {
    console.error(err)
    content.value = '❌ 获取联系方式失败，请检查后端是否启动'
  }
})
</script>

<template>
  <div style="padding:2rem">
    <h1>Contact</h1>
    <p>{{ content }}</p>
  </div>
</template>
