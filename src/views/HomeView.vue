<!-- src/views/HomeView.vue -->
<script setup>
import { ref, onMounted } from 'vue'

const msg = ref('正在连接后端…')

onMounted(() => {
  // 1 秒后去请求 /api/hello
  setTimeout(async () => {
    try {
      const API  = new URL(import.meta.env.VITE_API_URL)
      const res  = await fetch(new URL('/api/hello', API))
      const data = await res.json()
      msg.value  = data.msg
    } catch (err) {
      console.error(err)
      msg.value = '❌ 无法连接后端，确认 FastAPI 是否运行中'
    }
  }, 1000)
})
</script>

<template>
  <div style="display:flex;justify-content:center;align-items:center;height:100vh;font-size:1.5rem;">
    <h1>{{ msg }}</h1>
  </div>
</template>
