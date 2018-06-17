<template>
  <div class="my-container">
    <zan-tab :list="tab.list" :selectedId="tab.selectedId" @tabchange="handleChange" />
  </div>
</template>

<script>
// Use Vuex
import store from './store'

export default {
  data () {
    return {
      tab: {
        list: [{
          id: 1,
          title: '推荐'
        }, {
          id: 2,
          title: '我的'
        }, {
          id: 3,
          title: '日志'
        }],
        selectedId: 1
      }
    }
  },
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    handleChange (data) {
      console.log('2018年6月17日17:33:46---->', data.mp.detail)
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
