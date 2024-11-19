<template>
  <div class="login-panel">
    <el-tabs v-model="activeName" type="border-card" class="demo-tabs" stretch>
      <el-tab-pane label="账号登录" name="account">
        <template #label>
          <div class="title">
            <el-icon><UserFilled /></el-icon>
            <span class="text">账号登陆</span>
          </div>
        </template>
        <panel-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane label="手机登录" name="phone">
        <template #label>
          <div class="title">
            <el-icon><Iphone /></el-icon>
            <span class="text">手机登录</span>
          </div>
        </template>
      </el-tab-pane>
    </el-tabs>
    <div class="bottom">
      <el-checkbox v-model="isRemPwd" label="记住密码" size="large" />
      <el-text class="mx-1" type="primary">忘记密码</el-text>
    </div>

    <el-button
      type="primary"
      size="large"
      class="login-btn"
      @click="LoginBtnClickHandler"
      >立即登录</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import PanelAccount from './panel-account.vue'

const activeName = ref('account')
const isRemPwd = ref<boolean>()
const accountRef = ref<InstanceType<typeof PanelAccount>>()

const LoginBtnClickHandler = () => {
  if (activeName.value == 'account') {
    accountRef.value?.loginAction()
    console.log('账号登录------')
  } else {
    console.log('手机登录-----')
  }
}
</script>

<style lang="less" scoped>
.login-panel {
  width: 330px;

  .bottom {
    display: flex;
    justify-content: space-between;
  }
  .title {
    display: flex;
    align-items: center;
    .text {
      margin-left: 8px;
    }
  }
  .login-btn {
    --el-button-size: 50px;
    width: 100%;
  }
}
</style>
