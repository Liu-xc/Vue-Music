<template>
  <div class="top-search">
    <span class="top-title">Music</span>
    <div class="search-btn" @click.stop="handleSearchClick">
      <span class="iconfont icon-Group-"></span>
      <span class="search-text">搜索</span>
    </div>
    <span class="iconfont icon-xiugaitouxiang"></span>
  </div>
</template>

<script>
export default {
  name: 'TopSearch',
  methods: {
    handleSearchClick () {
      this.$router.push('/search')
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~styles/var.styl'

.top-search
  height $top-height
  position fixed
  width 100%
  padding 0.35rem 0.2rem
  background $bg-green
  display flex
  justify-content space-between
  align-items center
  color $bg-dark-blue
  z-index 100

  .top-title
    font-size 0.6rem

  .search-btn
    flex 1
    background $bg-white
    padding 0.1rem 1rem
    border-radius 0.3rem
    text-align center
    margin 0 0.2rem
    display flex
    align-items center
    justify-content center

    .search-text
      font-size 0.33rem
      font-weight lighter
      padding-left 0.1rem

    .icon-Group-
      color $bg-dark-blue

  .icon-xiugaitouxiang
    padding 0.1rem
</style>
