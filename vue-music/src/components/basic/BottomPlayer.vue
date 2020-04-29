<template>
  <div class="btm-player">
    <div class="album-img">
      <img :src="defaultImg" />
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
  position fixed
  bottom 0
  width 100%
  padding 0.35rem 0.2rem
  background $bg-green
  display flex
  justify-content space-between
  align-items center

  .album-img
    width 1rem
    border-radius 50%
    display flex
    justify-content center
    align-items center

    img
      width 100%
</style>
