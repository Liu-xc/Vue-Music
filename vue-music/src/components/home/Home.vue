<template>
  <div>
    <top-search></top-search>
    <switch-tags></switch-tags>

    <div class="home-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TopSearch from 'comp/basic/TopSearch'
import SwitchTags from 'comp/basic/SwitchTags'
// import jsonp from '@/common/jsonp.js'

export default {
  name: 'Home',
  components: {
    TopSearch,
    SwitchTags
  }
  // ,
  // mounted () {
  //   jsonp('http://www.migu.cn/product/recommend', {
  //     f: 'json',
  //     pageSize: 50,
  //     pageNo: 1,
  //     contentType: 20,
  //     picType: 11002
  //   }, {
  //     param: 'jsonpCallback'
  //   }).then(
  //     resolve => {
  //       console.log(resolve.data)
  //     },
  //     reject => {
  //       console.log('reject')
  //     })
  // }
}
</script>

<style scoped lang="stylus">
@import '~styles/var.styl'

.home-container
  padding $top-padding-height 0 $bottom-height
</style>
