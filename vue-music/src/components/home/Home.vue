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
import { mapGetters } from 'vuex'
// import jsonp from '@/common/jsonp.js'

export default {
  name: 'Home',
  components: {
    TopSearch,
    SwitchTags
  },
  computed: {
    ...mapGetters([
      'homeRouter'
    ])
  },
  mounted () {
    this.$nextTick(() => {
      this.$router.push(this.homeRouter)
    })
  }
}
</script>

<style scoped lang="stylus">
@import '~styles/var.styl'

.home-container
  padding $top-padding-height 0 $bottom-height
</style>
