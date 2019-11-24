export default ({ app }) => {
  app.router.beforeEach((to, from, next) => {
    const text = /^\/my\//g
    if (text.test(to.path)) {
      if (app.store.state.home.isLogin) {
        next()
      } else {
        app.store.commit('home/changeLoginText')
        app.router.push('/login')
        return
      }
    } else {
      next()
    }
    console.log(app)
    console.log(app.store.state.home.isLogin)
    console.log(to.path)
  })
}
