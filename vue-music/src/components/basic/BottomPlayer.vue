<template>
  <div class="btm-player">
    <div class="album-img">
      <img :src="defaultImg" />
    </div>
    <div class="song-info">
      <span class="song-name">电台情歌</span>
      <span class="singer">莫文蔚</span>
    </div>
    <div class="icons">
      <span class="iconfont icon-bofang"></span>
      <span class="iconfont icon-yinpinliebiao"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomPlayer',
  data () {
    return {
      defaultImg: 'static/img/logo.png'
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~styles/var.styl'

.btm-player
  height $bottom-height
  position fixed
  bottom 0
  width 100%
  padding 0.2rem 0.2rem
  background $bg-green
  display flex
  justify-content space-between
  align-items center
  color $bg-dark-blue

  .album-img
    width 1rem
    border-radius 50%
    display flex
    justify-content center
    align-items center

    img
      width 100%

  .song-info
    flex 1
    display flex
    flex-direction column
    padding 0 0.3rem

    .song-name
      font-size $font-size-large
      font-weight 600
      padding-bottom 0.1rem

    .singer
      font-size $font-size-medium

  .icons
    .icon-bofang
      font-size 0.9rem

    .icon-yinpinliebiao
      font-size 0.8rem
</style>
