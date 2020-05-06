<template>
  <div class="play-list" v-show="showPlayList" :style="{bottom_height: bottomPlayer}">
    <div class="list-header">
      <div class="play-mode">
        <span class="mode-icon iconfont icon-xunhuan7"></span>
        <span class="mode-desc"></span>
      </div>
      <span class="del-icon iconfont icon-lajitong"></span>
    </div>
    <div class="list-body">
      <ul></ul>
    </div>
    <div class="list-bottom"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PlayList',
  data () {
    return {
      bottom_height: {
        bottom: '$bottom-height'
      }
    }
  },
  computed: {
    ...mapGetters([
      'showPlayList',
      'bottomPlayer',
      'songList'
    ])
  }
}
</script>

<style scoped lang="stylus">
@import '~styles/var.styl'

.play-list
  position fixed
  bottom 0
  right 0
  left 0
  background $bg-green-ll

  .list-header
    padding 0.25rem 0.3rem
    display flex
    justify-content space-between

    .iconfont
      font-size $icon-size-large-x
      color $bg-dark-blue

  .list-body
    max-height 10rem
    height 6.5rem

  .list-bottom
    padding 0.2rem
</style>
