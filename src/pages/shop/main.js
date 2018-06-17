import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '有品',
    'usingComponents': {
      'i-button': '../../static/iview/button/index',
      'i-spin': '../../static/iview/spin/index',
      'i-icon': '../../static/iview/icon/index'
    }
  }
}
