<template>
  <div class="disc">
    <div class="singer">周杰伦</div>
    <div class="disc-img">
      <img src="static/img/logo.png" />
    </div>
    <div class="current-lyric">雨纷纷旧故里草木深</div>
  </div>
</template>

<script>
export default {
  name: 'Disc'
}
</script>

<style lang="stylus" scoped>
@import '~styles/var.styl'

.disc
  position absolute
  top 0
  left 0
  bottom 0
  right 0
  display flex
  flex-direction column

  .singer
    text-align center
    padding 0.5rem 0 0 0
    font-size $font-size-large

  .disc-img
    flex 1
    display flex
    justify-content center
    align-items center

    img
      width 75%
      height auto
      border-radius 50%

  .current-lyric
    padding 0 0 1rem 0
    text-align center
    font-size $font-size-large
</style>
