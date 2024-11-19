import { hyRquest1 } from '../index'

export function accountLoginRequest(account: any) {
  return hyRquest1.post({
    url: '/login',
    data: {
      name: account.username,
      password: account.password
    }
  })
}
