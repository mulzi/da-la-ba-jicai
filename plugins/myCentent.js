export default ({ app }) => {
  app.router.beforeEach((to, from, next) => {
    console.log(123)
    const text = /^\/my\//g
    if (text.test(to.path)) {
      console.log(1234)
      if (app.store.state.home.isLogin) {
        console.log(12345)
        next()
      } else {
        console.log(123456)
        app.store.commit('home/changeLoginText')
        app.router.push('/login')
      }
    } else {
      next()
    }
    // console.log(app)
    console.log(app.store.state.home.isLogin)
    console.log(to.path)
  })
}
