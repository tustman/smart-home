<template>
  <div class="counter-warp">

    <i-tabs :current="current" @change="handleChange" color="#00BC9C">
      <i-tab key="tab1" title="推荐"></i-tab>
      <i-tab key="tab2" title="我的"></i-tab>
      <i-tab key="tab3" title="日志"></i-tab>
    </i-tabs>

  </div>
</template>

<script>
// Use Vuex
import store from './store'

export default {
  data () {
    return {
      current: 'tab1',
      current_scroll: 'tab1'
    }
  },
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    handleChange (data) {
      this.current = data.mp.detail.key
    },
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  }
}
</script>

<style>
  .my-container {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
  }
</style>
