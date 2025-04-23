<template>
  <div id="app">
    <header>
      <nav class="nav-bar">
        <RouterLink to="/"        exact-active-class="active">Services</RouterLink>
        <RouterLink to="/prices"  active-class="active">Prices</RouterLink>
        <RouterLink to="/about"   active-class="active">About</RouterLink>
        <RouterLink to="/contact" active-class="active">Contact</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView />  <!-- ← 路由匹配的组件会渲染到这里 -->
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
/* 全局字体 */
#app {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}

/* 导航栏 */
.nav-bar {
  display: flex;
  gap: 2rem;
  padding: 1.5rem 2rem;
  background-color: #fafafa;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

/* 链接样式 */
.nav-bar a {
  text-decoration: none;
  color: #333;
  font-size: 1.25rem;
  font-weight: 500;
  transition: color 0.2s;
}
.nav-bar a:hover {
  color: #42b983;
}
.nav-bar a.active {
  color: #42b983;
  border-bottom: 3px solid #42b983;
  padding-bottom: 0.25rem;
}

/* 响应式 */
@media (max-width: 600px) {
  .nav-bar { flex-direction: column; gap: 1rem; }
}
</style>
