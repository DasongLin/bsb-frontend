<!-- src/views/PricesView.vue -->
<script setup>
import { ref, onMounted } from 'vue'

const content = ref('正在加载定价信息…')

onMounted(async () => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/Prices`).then(r => r.json())
    const json = await res.json()
    content.value = json.content      // 把后端最新的 content 字段赋给页面
  } catch (e) {
    console.error(e)
    content.value = '❌ 获取定价信息失败，请确认后端是否启动'
  }
})
</script>

<template>
  <div style="padding: 2rem;">
    <h1>Prices</h1>
    <p>{{ content }}</p>
  </div>
</template>
