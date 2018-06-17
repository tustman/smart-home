<template>
  <div class="my-container">
    <i-panel>
      <i-cell title="开启语音控制功能">
        <i-switch :value="switchValue" @change="handleChange" slot="footer">
          <i-icon type="right" slot="open"></i-icon>
          <i-icon type="close" slot="close"></i-icon>
        </i-switch>
      </i-cell>
    </i-panel>

    <i-panel v-if="switchValue" class="cell-panel-demo" title="语音服务提供商">
      <i-radio-group :current="current" @change="handleFruitChange">
        <i-radio color="#00BC9C" v-for="(item, index) in fruit" position="right" :key="item.id" :value="item.name">
        </i-radio>
      </i-radio-group>
    </i-panel>
  </div>
</template>

<script>
import card from '@/components/card'
export default {
  data () {
    return {
      fruit: [{
        id: 1,
        name: '小爱同学'
      }, {
        id: 2,
        name: '微软小冰'
      }],
      current: '小爱同学',
      switchValue: true,
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
    handleFruitChange (data) {
      this.current = data.mp.detail.value
    },
    handlerAvatarClick () {
    },
    handleChange (data) {
      this.switchValue = data.mp.detail.value
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
