<!-- src/views/ServicesView.vue -->
<script setup>
import { ref, onMounted } from 'vue'

const content = ref('正在加载服务信息…')

onMounted(async () => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/services`).then(r => r.json())
    const json = await res.json()
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
