<template>
  <div>
    <div class="top-search">
      <span class="iconfont icon-fanhui" @click.stop="handleBackClick"></span>
      <span class="top-title">Search Music</span>
    </div>
    <div class="search">
      <div class="search-input">
        <input type="text" placeholder="输入歌手或歌名" />
      </div>
      <div class="search-result">
        <list-scroll>
          <ul class="results">
            <li class="result">
              <span class="iconfont icon-ttpodicon"></span>
              <span class="res-desc">晴天 - 周杰伦</span>
            </li>
            <li class="result">
              <span class="iconfont icon-ttpodicon"></span>
              <span class="res-desc">晴天 - 周杰伦</span>
            </li>
            <li class="result">
              <span class="iconfont icon-ttpodicon"></span>
              <span class="res-desc">晴天 - 周杰伦</span>
            </li>
            <li class="result">
              <span class="iconfont icon-ttpodicon"></span>
              <span class="res-desc">晴天 - 周杰伦</span>
            </li>
            <li class="result">
              <span class="iconfont icon-ttpodicon"></span>
              <span class="res-desc">晴天 - 周杰伦</span>
            </li>
            <li class="result">
              <span class="iconfont icon-ttpodicon"></span>
              <span class="res-desc">晴天 - 周杰伦</span>
            </li>
            <li class="result">
              <span class="iconfont icon-ttpodicon"></span>
              <span class="res-desc">晴天 - 周杰伦</span>
            </li>
            <li class="result">
              <span class="iconfont icon-ttpodicon"></span>
              <span class="res-desc">晴天 - 周杰伦</span>
            </li>
            <li class="result">
              <span class="iconfont icon-ttpodicon"></span>
              <span class="res-desc">晴天 - 周杰伦</span>
            </li>
            <li class="result">
              <span class="iconfont icon-ttpodicon"></span>
              <span class="res-desc">晴天 - 周杰伦</span>
            </li>
            <li class="result">
              <span class="iconfont icon-ttpodicon"></span>
              <span class="res-desc">晴天 - 周杰伦</span>
            </li>
            <li class="result">
              <span class="iconfont icon-ttpodicon"></span>
              <span class="res-desc">晴天 - 周杰伦</span>
            </li>
            <li class="result">
              <span class="iconfont icon-ttpodicon"></span>
              <span class="res-desc">晴天 - 周杰伦</span>
            </li>
            <li class="result">
              <span class="iconfont icon-ttpodicon"></span>
              <span class="res-desc">晴天 - 周杰伦</span>
            </li>
            <li class="result">
              <span class="iconfont icon-ttpodicon"></span>
              <span class="res-desc">晴天 - 周杰伦</span>
            </li>
            <li class="result">
              <span class="iconfont icon-ttpodicon"></span>
              <span class="res-desc">晴天 - 周杰伦</span>
            </li>
            <li class="result">
              <span class="iconfont icon-ttpodicon"></span>
              <span class="res-desc">晴天 - 周杰伦</span>
            </li>
            <li class="result">
              <span class="iconfont icon-ttpodicon"></span>
              <span class="res-desc">晴天 - 周杰伦</span>
            </li>
            <li class="result">
              <span class="iconfont icon-ttpodicon"></span>
              <span class="res-desc">晴天 - 周杰伦</span>
            </li>
            <li class="result">
              <span class="iconfont icon-ttpodicon"></span>
              <span class="res-desc">晴天 - 周杰伦</span>
            </li>
            <li class="result">
              <span class="iconfont icon-ttpodicon"></span>
              <span class="res-desc">晴天 - 周杰伦</span>
            </li>
            <li class="result">
              <span class="iconfont icon-ttpodicon"></span>
              <span class="res-desc">晴天 - 周杰伦</span>
            </li>
            <li class="result">
              <span class="iconfont icon-ttpodicon"></span>
              <span class="res-desc">晴天 - 周杰伦</span>
            </li>
            <li class="result">
              <span class="iconfont icon-ttpodicon"></span>
              <span class="res-desc">晴天 - 周杰伦</span>
            </li>
          </ul>
        </list-scroll>
      </div>
    </div>
  </div>
</template>

<script>
import ListScroll from 'comp/basic/ListScroll'
export default {
  name: 'Search',
  components: {
    ListScroll
  },
  methods: {
    handleBackClick () {
      this.$router.back(-1)
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~styles/var.styl'

.search
  full-screen-container()
  top $top-height - 24px

  .search-input
    position fixed
    display flex
    justify-content center
    padding 0.3rem 0
    width 100%

    input
      width 80%
      border-radius 0.4rem
      padding 0.08rem 0.2rem
      text-align center
      font-size $font-size-medium-x
      color $bg-dark-blue-l

  .search-result
    overflow scroll
    position absolute
    top 60px
    bottom 0
    right 0
    left 0

    .results
      padding 0rem 0.8rem

      .result
        padding 0.18rem 0

        .icon-ttpodicon
          font-size $icon-size-large-x

        .res-desc
          padding-left 0.2rem
          font-size $font-size-medium-x
          color $bg-dark-blue

.top-search
  height $top-height - 24px
  position fixed
  width 100%
  padding 0.35rem 0.2rem
  background $bg-green
  display flex
  justify-content center
  align-items center
  color $bg-dark-blue
  z-index 100

  .icon-fanhui
    font-size $font-size-medium-x
    color $bg-dark-blue
    padding-left 0.12rem

  .top-title
    flex 1
    font-size $font-size-large-x
    text-align center
</style>
