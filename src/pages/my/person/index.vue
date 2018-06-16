<template>
  <div class="my-container">
    <i-panel class="cell-panel-demo" title="基础资料">
      <i-cell-group>
        <i-cell title="头像" is-link></i-cell>
        <i-cell title="账号" is-link></i-cell>
        <i-cell title="姓名" is-link></i-cell>
      </i-cell-group>
    </i-panel>
    <i-panel class="cell-panel-demo" title="账号绑定">
      <i-cell-group>
        <i-cell title="微信账号" is-link></i-cell>
      </i-cell-group>
    </i-panel>
    <i-panel class="cell-panel-demo" title="密保资料">
      <i-cell-group>
        <i-cell title="手机号" is-link></i-cell>
        <i-cell title="邮箱" is-link></i-cell>
        <i-cell title="修改密码" is-link></i-cell>
      </i-cell-group>
    </i-panel>
  </div>
</template>

<script>
import card from '@/components/card'
export default {
  data () {
    return {
      buttonType: 'error',
      buttonValue: '关机',
      userInfo: {},
      currentInfo: 'homepage'
    }
  },

  components: {
    card
  },

  methods: {
    handlerAvatarClick () {
    },
    handleChange (data) {
      this.currentInfo = data.mp.detail.key
    },
    handleClick () {
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
  .cell-panel-demo{
    display: block;
  }
  .my-container {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
  }
</style>
