
import { Auth } from '../services/auth'

export default function (context) {
  const auth = new Auth(context)
  const { store } = context
  store.dispatch('home/CHANGELOGIN', auth.isLogin())
  const { app } = context
  app.router.beforeEach((to, from, next) => {
    const text = /^\/my\//
    if (text.test(to.path)) {
      if (app.store.state.home.isLogin) {
        next()
      } else {
        app.store.commit('home/changeLoginText')
        app.router.push('/login')
      }
    } else {
      next()
    }
    if (to.path === '/release') {
      if (app.store.state.home.isLogin) {
        next()
      } else {
        app.store.commit('home/changeLoginText')
        app.router.push('/login')
      }
    } else {
      next()
    }
    // console.log(app)
    // console.log(app.store.state.home.isLogin)
    // console.log(to.path)
  })
}
