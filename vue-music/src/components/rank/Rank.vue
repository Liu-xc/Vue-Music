<template>
  <div class="rank">
    <list-scroll>
      <ul class="rank-list">
        <li class="rank-item">
          <img src="static/img/logo.png" class="rank-img" />
          <ul class="top-3">
            <li class="top-3-item">
              <span class="song-name">晴天</span>
              <span class="singer">- 周杰伦</span>
            </li>
            <li class="top-3-item">
              <span class="song-name">一路向北</span>
              <span class="singer">- 周杰伦</span>
            </li>
            <li class="top-3-item">
              <span class="song-name">七里香</span>
              <span class="singer">- 周杰伦</span>
            </li>
          </ul>
        </li>
      </ul>
    </list-scroll>
  </div>
</template>

<script>
import ListScroll from 'comp/basic/ListScroll'
export default {
  name: 'Rank',
  components: {
    ListScroll
  }
}
</script>

<style scoped lang="stylus">
@import '~styles/var.styl'

.rank
  background $bg-green-ll
  position absolute
  top $top-padding-height
  bottom 0
  right 0
  left 0
  overflow scroll
  color $bg-white-l
  font-size $font-size-medium-x
  padding 0.25rem 0.25rem

  .rank-list
    width 100%

    .rank-item
      display flex
      background $bg-dark-blue-ll

      .rank-img
        width 1.8rem

      .top-3
        padding 0.1rem 0.7rem
        flex 1
        display flex
        justify-content space-evenly
        flex-direction column

        .top-3-item
          .singer
            color $bg-white-ll
</style>
