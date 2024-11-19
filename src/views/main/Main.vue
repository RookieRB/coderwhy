<template>
  <div class="main">
    <h2>
      main:{{ counterStore.counter }} ----- {{ counterStore.doubleCounter }}
    </h2>
    <button @click="changeCounter"></button>
  </div>
</template>

<script setup lang="ts">
import useCounterStore from '@/stores/counter'

const counterStore = useCounterStore()

const changeCounter = () => {
  counterStore.changeCounterAcation(999)
}
</script>

<style lang="less" scoped>
.main {
}
</style>
