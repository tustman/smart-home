<template>
  <div class="home-container">

    <div class="header-info">

      <div class="weather_info">
        <div offset="1" span="5" class="weather_info_1">
          <span class="weather_temp">24</span>
          <span class="weather_temp_unit"> ℃</span>
        </div>
        <div span="6" class="weather_info_2">
          <div class="address">北京·朝阳</div>
          <div class="weather_info_text">阴</div>
        </div>
      </div>
      <div class="weather_info">
        <span class="weather_info_text_2">室外空气 良 | 周边水质 不可直饮 | 环境湿度 潮湿</span>
      </div>

    </div>

    <div class="main-content">
      <div class="room-list"></div>
      <div class="room-device"></div>
    </div>


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
  .main-content{
    padding: 5px;
  }
  .room-list{
    display: inline-block;
    position: absolute;
    width: 18%;
    height: 75%;
    background-color: #FCFCFC;
    border-radius: 5px;
  }

  .room-device {
    display: inline-block;
    position: absolute;
    margin-left: 19%;
    width: 78%;
    height: 75%;
    background-color: #FCFCFC;
    border-radius: 5px;
  }

  .home-container {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #A7A3A0;
  }

  .weather_info {
    height: 50px;
    margin-left: 20px;
  }
  .weather_info_1 {
    display: inline-block;
    height: 50px;
  }

  .weather_info_2 {
    display: inline-block;
    height: 50px;
    margin-left: 10px;
  }
  .address {
    font-size: 12px;
    color: #ffffff;
  }
  .weather_info_text {
    font-size: 12px;
    display: block;
    color: #ffffff;
  }
  .weather_info_text_2 {
    margin-top: 5px;
    font-size: 12px;
    display: block;
    color: #ffffff;
  }

  .weather_temp {
    font-size: 44px;
    color: #ffffff;
  }

  .weather_temp_unit {
    font-size: 12px;
    color: #ffffff;
  }
</style>
