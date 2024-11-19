import { defineStore } from 'pinia'
import { accountLoginRequest } from '@/service/login/index'

const useLoginStore = defineStore('login', {
  state: () => ({
    id: '',
    token: '',
    name: ''
  }),
  actions: {
    async loginAccountAction(account: any) {
      const loginResult = await accountLoginRequest(account)
      this.id = loginResult.id
      this.token = loginResult.token
      this.name = loginResult.name
    }
  }
})

export default useLoginStore
