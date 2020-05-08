<template>
  <div ref="wrapper">
    <ul class="song-list content">
      <li class="song">
        <span class="name">一路向北</span>
        <span class="singer">- 周杰伦</span>
      </li>
      <li class="song">
        <span class="name">一路向北</span>
        <span class="singer">- 周杰伦</span>
      </li>
      <li class="song">
        <span class="name">一路向北</span>
        <span class="singer">- 周杰伦</span>
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'LikeList',
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {})
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/var.styl'

.song
  padding 0.3rem 0.2rem 0.2rem
  color $bg-dark-blue
  border-bottom solid 1px $bg-green-ll

  .name
    font-size $font-size-large

  .singer
    padding-left 0.15rem
    font-size $font-size-medium
    color $bg-white-l
</style>
