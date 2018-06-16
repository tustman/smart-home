import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      '^pages/index/main',
      'pages/shop/main',
      'pages/scene/main',
      'pages/my/main',
      'pages/my/person/main',
      'pages/my/voice/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#A7A3A0',
      navigationBarTitleText: 'Smart Home',
      navigationBarTextStyle: '#FFFFFF'
    },
    tabBar: {
      color: '#999999',
      selectedColor: '#00BC9C',
      borderStyle: 'black',
      backgroundColor: '#F7F7F7',
      list: [{
        pagePath: 'pages/index/main',
        iconPath: '/static/image/std_tab_icon_my_device_normal.png',
        selectedIconPath: '/static/image/std_tab_icon_my_device_selected.png',
        text: '米家'
      }, {
        pagePath: 'pages/shop/main',
        iconPath: '/static/image/std_tab_icon_shop_normal.png',
        selectedIconPath: '/static/image/std_tab_icon_shop_selected.png',
        text: '有品'
      }, {
        pagePath: 'pages/scene/main',
        iconPath: '/static/image/std_tab_icon_scene_normal.png',
        selectedIconPath: '/static/image/std_tab_icon_scene_selected.png',
        text: '智能'
      }, {
        pagePath: 'pages/my/main',
        iconPath: '/static/image/std_tab_icon_my_centernormal.png',
        selectedIconPath: '/static/image/std_tab_icon_my_center_selected.png',
        text: '我的'
      }]
    }
  }
}
