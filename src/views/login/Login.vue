<template>
  <div class="login">
    <h2>后台管理系统</h2>
    <login-panel></login-panel>
  </div>
</template>

<script setup lang="ts">
import LoginPanel from './c-cpns/login-panel.vue'
</script>

<style lang="less" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  height: 100%;
  width: 100%;
}
</style>
