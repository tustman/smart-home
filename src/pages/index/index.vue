<template>
  <div class="container">
    <i-button :type="buttonType" @click="handleClick" shape="circle" size="large">{{buttonValue}}</i-button>
    <i-message id="message" />
  </div>
</template>

<script>
import card from '@/components/card'

const {$Message} = require('../../../static/iview/base/index')

export default {
  data () {
    return {
      buttonType: 'error',
      buttonValue: '关机',
      motto: 'Hello World',
      current: 'tab1',
      userInfo: {}
    }
  },

  components: {
    card
  },

  methods: {
    handleClick () {
      if (this.buttonType === 'success') {
        $Message({content: '电视已开机', type: 'success'})
        this.buttonValue = '关机'
        this.buttonType = 'error'
      } else if (this.buttonType === 'error') {
        $Message({content: '电视已关机', type: 'success'})
        this.buttonValue = '开机'
        this.buttonType = 'success'
      }
    },
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped>
</style>
