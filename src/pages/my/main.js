import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()
export default {
  config: {
    'usingComponents': {
      'i-button': '../../static/iview/button/index',
      'i-tabs': '../../static/iview/tabs/index',
      'i-message': '../../static/iview/message/index',
      'i-tab-bar': '../../static/iview/tab-bar/index',
      'i-tab-bar-item': '../../static/iview/tab-bar-item/index',
      'i-row': '../../static/iview/row/index',
      'i-col': '../../static/iview/col/index',
      'zan-row': '../../static/zan/row/index',
      'zan-col': '../../static/zan/col/index'
    },
    navigationBarTitleText: '我的'
  }
}
