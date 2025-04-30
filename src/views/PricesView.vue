<!-- src/views/PricesView.vue -->
<script setup>
import { ref, onMounted } from 'vue'

const content = ref('正在加载定价信息…')

onMounted(async () => {
  try {
    const API     = new URL(import.meta.env.VITE_API_URL)
    const res     = await fetch(new URL('/api/prices', API))
    const json    = await res.json()
    content.value = json.content      // 显示后端返回
  } catch (e) {
    console.error(e)
    content.value = '❌ 获取定价信息失败，请确认后端是否启动'
  }
})
</script>

<template>
  <div style="padding:2rem">
    <h1>Prices</h1>
    <p>{{ content }}</p>
  </div>
</template>
