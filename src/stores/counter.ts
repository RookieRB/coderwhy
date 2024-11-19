import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 100
  }),
  getters: {
    doubleCounter(state) {
      return state.counter * 2
    }
  },
  actions: {
    changeCounterAcation(newCoutner: any) {
      this.counter = newCoutner
    }
  }
})

export default useCounterStore
