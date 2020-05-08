<template>
  <div class="user">
    <div class="user-header">
      <span class="iconfont icon-fanhui" @click.stop="handleBackClick"></span>
      <div class="header-title">Vue Music</div>
    </div>
    <div class="list-tags">
      <router-link tag="span" to="/user/我喜欢的" class="tag">我喜欢的</router-link>
      <router-link tag="span" to="/user/最近听的" class="tag">最近听的</router-link>
    </div>
    <div class="random-play-all">
      <span class="iconfont icon-bofang"></span>
      <span>随机播放全部</span>
    </div>
    <router-view class="router-view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'User',
  methods: {
    handleBackClick () {
      this.$router.back(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/var.styl'

.user
  full-screen-container()
  color $bg-dark-blue
  display flex
  flex-direction column
  padding-bottom $bottom-height

  .user-header
    padding 0.2rem 0
    background $bg-green-l
    display flex
    align-items center

    .iconfont
      position absolute
      padding-left 0.2rem

    .header-title
      flex 1
      text-align center

  .list-tags
    width 44%
    margin 0.3rem auto 0.3rem
    padding 0.2rem
    text-align center
    background $bg-green-ll
    border-radius 0.5rem
    font-size $font-size-medium-x

    .tag:nth-child(1)
      padding-right 0.2rem
      border-right solid 1px $bg-dark-blue

    .tag:nth-child(2)
      padding-left 0.1rem

  .random-play-all
    width 38%
    margin 0 auto
    background $bg-green-ll
    border-radius 0.4rem
    font-size $font-size-medium-x
    padding 0.1rem 0.2rem
    display flex
    align-items center
    justify-content center

    .iconfont
      font-size 26px

  .router-view
    flex 1
    margin-top 0.2rem
    padding 0 0.7rem
    overflow scroll
</style>
