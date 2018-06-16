<template>
  <div class="my-container">
    <i-panel>
      <div class="title-panel">

        <div>
          <i-avatar class="my-avatar" src="../../../static/image/avatar.jpg" size="large"></i-avatar>
        </div>

        <div class="my-title-info">
          <span class="address">王一宁</span>
          <span class="weather_info_text">8个智能设备</span>
        </div>

        <div class="my-title-info-more">
          >
        </div>

      </div>
    </i-panel>


    <i-panel>
      <i-cell>
        <i-grid>

          <i-grid-item i-class="grid-item">
            <i-grid-icon>
              <image class="grid-image" src="/static/image/std_person_center_icon_scene.png"/>
            </i-grid-icon>
            <i-grid-label><span class="grid-text">品味</span></i-grid-label>
          </i-grid-item>

          <i-grid-item>

            <i-grid-icon>
              <image class="grid-image" src="/static/image/std_person_center_icon_share_device.png"/>
            </i-grid-icon>
            <i-grid-label class="grid-text"><span class="grid-text">设备共享</span></i-grid-label>

          </i-grid-item>

          <i-grid-item>

            <i-grid-icon>
              <image class="grid-image" src="/static/image/std_person_center_icon_family.png"/>
            </i-grid-icon>
            <i-grid-label class="grid-text"><span class="grid-text">我的家人</span></i-grid-label>

          </i-grid-item>


          <i-grid-item>

            <i-grid-icon>
              <image class="grid-image" src="/static/image/std_person_center_icon_experience.png"/>
            </i-grid-icon>
            <i-grid-label class="grid-text"><span class="grid-text">虚拟体验</span></i-grid-label>

          </i-grid-item>
        </i-grid>
        <i-grid>
          <i-grid-item>

            <i-grid-icon>
              <image class="grid-image" src="/static/image/std_person_center_icon_ble_gateway.png"/>
            </i-grid-icon>
            <i-grid-label class="grid-text"><span class="grid-text">蓝牙网关</span></i-grid-label>

          </i-grid-item>

          <i-grid-item>

            <i-grid-icon>
              <image class="grid-image" src="/static/image/std_person_center_icon_my_shop.png"/>
            </i-grid-icon>
            <i-grid-label class="grid-text"><span class="grid-text">生活耗材</span></i-grid-label>

          </i-grid-item>

          <i-grid-item>

            <i-grid-icon>
              <image class="grid-image" src="/static/image/std_person_center_icon_water.png"/>
            </i-grid-icon>
            <i-grid-label class="grid-text"><span class="grid-text">生活缴费</span></i-grid-label>

          </i-grid-item>


          <i-grid-item>

            <i-grid-icon>
              <image class="grid-image" src="/static/image/std_person_center_voice_icon.png"/>
            </i-grid-icon>
            <i-grid-label class="grid-text"><span class="grid-text">语音控制</span></i-grid-label>

          </i-grid-item>
        </i-grid>
      </i-cell>
    </i-panel>

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
      userInfo: {},
      currentInfo: 'homepage'
    }
  },

  components: {
    card
  },

  methods: {
    handleChange (data) {
      this.currentInfo = data.mp.detail.key
    },
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
  .title-panel{
    display: flex;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 25px;
    justify-content: flex-start;
  }
  .my-avatar{
    margin-left: 20px;
    height: 100px;
    width: 100px;
  }
  .my-container {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
  }

  .my-title-info {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .my-title-info-more {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 150px;
    color: #7F7F7F;
  }

  .address {
    font-size: 12px;
  }

  .weather_info_text {
    font-size: 12px;
    color: #7F7F7F;
  }
  .grid-image{
    transform: scale(0.8);
  }
  .grid-text{
    font-size: 12px;
  }
</style>
