<template>
  <div class="home-container">

    <div class="header-content">
      <div class="weather_info">
        <div offset="1" span="5" class="weather_info_1">
          <span class="weather_temp">24</span>
          <span class="weather_temp_unit"> ℃</span>
        </div>
        <div span="6" class="weather_info_2">
          <div class="address">北京·朝阳</div>
          <div class="weather_info_text">多云</div>
        </div>
      </div>
      <div class="weather_info">
        <span class="weather_info_text_2">室外空气 良 | 周边水质 不可直饮 | 环境湿度 潮湿</span>
      </div>
    </div>

    <div class="main-content">
      <div class="room-list">
        <i-tab-bar :current="currentInfo" color="#00BC9C" @change="handleChange">
          <i-tab-bar-item key="common" icon="collection" current-icon="collection_fill" title="常用"></i-tab-bar-item>
          <i-tab-bar-item key="bedroom" icon="clock" current-icon="clock_fill" title="卧室"></i-tab-bar-item>
          <i-tab-bar-item key="living" icon="homepage" current-icon="homepage_fill" title="客厅"></i-tab-bar-item>
          <i-tab-bar-item key="kitchen" icon="task" current-icon="task_fill" title="厨房"></i-tab-bar-item>
          <i-tab-bar-item key="nearby" icon="share" current-icon="share_fill" title="附近"></i-tab-bar-item>
          <i-tab-bar-item key="setting" icon="setup" current-icon="setup_fill" title="设置"></i-tab-bar-item>
        </i-tab-bar>
      </div>
      <div class="room-device">
        <div style="border: 0 solid #e9eaec; border-bottom-width: 1px;">
          <view
            style="padding-left:12px;padding-top:12px;padding-bottom:12px;font-size: 16px;color: #666666;display: inline-block">
            <span>{{currentRoom}}</span>
          </view>
          <view style="font-size: 10px;margin-left: 5px;color: #999999;display: inline-block">
            <span>{{deviceList.length}}个设备</span>
          </view>
        </div>

        <i-cell v-for="(item, index) in deviceList" :title="item.title" :label="item.label" :image="item.image">
          <i-switch v-if="item.isSwitch" :value="item.value" @change="handleChangeDevice(item)" slot="footer">
            <i-icon type="right"></i-icon>
            <i-icon type="close"></i-icon>
          </i-switch>
        </i-cell>

        <!--<i-cell title="智能灯泡" label="已开灯" image="/static/image/device_list_yeelight_real.png">-->
          <!--<i-switch :value="switchValue" @change="handleChangeDevice" slot="footer">-->
            <!--<i-icon type="right"></i-icon>-->
            <!--<i-icon type="close"></i-icon>-->
          <!--</i-switch>-->
        <!--</i-cell>-->
        <!--<i-cell title="米家台灯" label="已关灯" image="/static/image/pms1.jpg">-->
          <!--<i-switch :value="switchValue1" @change="handleChangeDevice1" slot="footer">-->
            <!--<i-icon type="right"></i-icon>-->
            <!--<i-icon type="close"></i-icon>-->
          <!--</i-switch>-->
        <!--</i-cell>-->
        <!--<i-cell title="米家电饭煲" label="设备在线" image="/static/image/pms2.png">-->
        <!--</i-cell>-->

        <!--<i-cell title="小米空气净化器" label="设备离线" image="/static/image/pms3.png">-->
        <!--</i-cell>-->

      </div>
    </div>

    <i-message id="message" />
  </div>
</template>

<script>
import card from '@/components/card'

const {$Message} = require('../../../static/iview/base/index')

export default {
  data () {
    return {
      deviceList: [
        {
          title: '智能灯泡',
          image: '/static/image/device_list_yeelight_real.png',
          isSwitch: true,
          label: '已开灯',
          value: true
        },
        {
          title: '米家台灯',
          image: '/static/image/pms1.jpg',
          isSwitch: true,
          label: '已关灯',
          value: false
        },
        {
          title: '米家电饭煲',
          image: '/static/image/pms2.png',
          label: '设备在线'
        },
        {
          title: '小米空气净化器',
          image: '/static/image/pms3.png',
          label: '设备离线'
        }
      ],
      current: '小爱同学',
      switchValue: true,
      switchValue1: true,
      switchValue2: true,
      buttonType: 'error',
      buttonValue: '关机',
      userInfo: {},
      currentInfo: 'common',
      currentCount: 1,
      currentRoom: '常用'
    }
  },
  components: {
    card
  },
  methods: {
    handleChange (data) {
      this.currentInfo = data.mp.detail.key
      this.currentRoom = this.getCurrentRoom(this.currentInfo)
    },
    handleChangeDevice (device) {
      device.value = !device.value
      this.getStatus(device)
    },
    getStatus (device) {
      let status = ''
      if (!device) {
        device.label = status
        return
      }
      if (device.isSwitch) {
        if (device.value) {
          status = '已开灯'
        } else {
          status = '已关灯'
        }
      }
      device.label = status
    },
    getCurrentRoom (roomType) {
      let rooomInfo = {
        common: '常用',
        bedroom: '卧室',
        living: '客厅',
        kitchen: '厨房',
        nearby: '附件',
        setting: '设置'
      }
      return rooomInfo[roomType]
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

  .home-container {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #A7A3A0;
  }

  .header-content {
    position: relative;
    width: 100%;
    height: 20%;
  }
  .main-content{
    position: relative;
    display: flex;
    align-content: flex-start;
    width: 100%;
    height: 80%;
  }
  .room-list{
    display: inline-block;
    position: relative;
    width: 15%;
    height: 95%;
    margin-left: 5px;
    background-color: #FCFCFC;
    border-radius: 5px;
  }

  .room-device {
    display: inline-block;
    position: relative;
    margin-left: 5px;
    margin-right: 5px;
    width: 100%;
    height: 95%;
    background-color: #FCFCFC;
    border-radius: 5px;
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
