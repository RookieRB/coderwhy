<template>
  <div class="panel-account">
    <el-form
      label-width="60px"
      :rules="accountRules"
      :model="account"
      ref="ELFormRef"
    >
      <el-form-item label="帐号" prop="username">
        <el-input v-model="account.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" type="password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormRules, ElForm } from 'element-plus'
import { ElMessage } from 'element-plus'

import useLoginStore from '@/stores/login'

const account = reactive({
  username: '',
  password: ''
})

const ELFormRef = ref<InstanceType<typeof ElForm>>()

const accountRules: FormRules = {
  username: [
    {
      required: true,
      message: '必须输入帐号信息学~~',
      trigger: 'blur'
    },
    {
      pattern: /^[a-zA-Z0-9]{6,20}$/,
      message: '长度必须为6~20位长度',
      trigger: 'change'
    }
  ],
  password: [
    {
      required: true,
      message: '必须输入密码信息~',
      trigger: 'blur'
    },
    {
      pattern: /^[a-zA-Z0-9]{3,}$/,
      message: '密码长度必须为3位以上数字或字母 ',
      trigger: 'change'
    }
  ]
}

function loginAction() {
  ELFormRef.value?.validate((isVaild) => {
    if (isVaild) {
      // 1. 获取用户输入的帐号秘密
      const username = account.username
      const password = account.password

      ElMessage({
        message: '登陆成功',
        type: 'success',
        plain: true
      })
    } else {
      ElMessage({
        message: 'Oops, this is a error message.',
        type: 'error',
        plain: true
      })
    }
  })
}

defineExpose({
  loginAction
})
</script>

<style lang="less" scoped>
.panel-account {
}
</style>
