<script setup>
import { ref, onMounted } from 'vue'

const msg = ref('正在连接后端...')
onMounted(() => {
  // 第一步：确认组件加载
  msg.value = '👉 我们已加载 HomeView 组件'
  
  // 第二步：1 秒后再去调用后端 API
  setTimeout(async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api`).then(r => r.json())
      const data = await res.json()
      msg.value = data.msg   // 显示后端返回
    } catch (err) {
      console.error(err)
      msg.value = '❌ 无法连接后端，确认 FastAPI 是否运行中'
    }
  }, 1000)
})
</script>

<template>
  <div
    style="display:flex;
           justify-content:center;
           align-items:center;
           height:100vh;
           font-size:1.5rem;"
  >
    <h1>{{ msg }}</h1>
  </div>
</template>
