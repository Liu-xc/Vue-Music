<template>
  <div>
    <top-search></top-search>
    <div class="home-container">
      <switch-tags></switch-tags>
      <router-view></router-view>
    </div>
    <bottom-player></bottom-player>
  </div>
</template>

<script>
import TopSearch from 'comp/basic/TopSearch'
import BottomPlayer from 'comp/basic/BottomPlayer'
import SwitchTags from 'comp/basic/SwitchTags'

export default {
  name: 'Home',
  components: {
    TopSearch,
    BottomPlayer,
    SwitchTags
  }
}
</script>

<style scoped lang="stylus">
@import '~styles/var.styl'

.home-container
  padding $top-height 0 $bottom-height
</style>
