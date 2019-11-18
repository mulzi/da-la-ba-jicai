/**
 * 全局异常处理方法
 */
export default {

  formatError (e) {
    if (e.response) {
      if (e.response.data) {
        if (e.response.data.code === '10002') {
          window.location.href = '/login'
        }
        if (e.response.data.message) {
          return e.response.data.message
        } else {
          return e.response.data
        }
      } else {
        return e.message
      }
    } else {
      return e.message
    }
  }

}
