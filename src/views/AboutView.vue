<!-- src/views/AboutView.vue -->
<script setup>
import { ref, onMounted } from 'vue'

const content = ref('正在加载公司信息…')

onMounted(async () => {
  try {
    const res  = await fetch('http://localhost:8000/api/about')
    const json = await res.json()
    content.value = json.content
  } catch (err) {
    console.error(err)
    content.value = '❌ 获取公司信息失败，请检查后端是否启动'
  }
})
</script>

<template>
  <div style="padding:2rem">
    <h1>About</h1>
    <p>{{ content }}</p>
  </div>
</template>
