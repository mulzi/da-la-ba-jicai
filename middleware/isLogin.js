
import { Auth } from '../services/auth'

export default function (context) {
  const auth = new Auth(context)
  const { store } = context
  store.dispatch('home/CHANGELOGIN', auth.isLogin())
}
