<template>
  <div class="singers">
    <list-scroll>
      <ul class="class-list">
        <li class="class-item">
          <div class="class-title">热门</div>
          <ul class="singers-list">
            <li class="singer-item">
              <img src="static/img/logo.png" class="avatar" alt />
              <span class="singer-name">周杰伦</span>
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
  name: 'Singers',
  components: {
    ListScroll
  }
}
</script>

<style scoped lang="stylus">
@import '~styles/var.styl'

.singers
  position absolute
  top $top-padding-height
  left 0
  right 0
  bottom 0
  overflow scroll
  background $bg-green-ll
  color $bg-dark-blue-l

  .class-list
    .class-item
      .class-title
        background $bg-dark-blue-ll
        padding 0.1rem 0.4rem
        font-size $font-size-large

      .singers-list
        .singer-item
          background $bg-green-ll
          padding 0.18rem 0.4rem

          .avatar
            width 1.3rem
            border-radius 50%
            background $bg-dark-blue-ll

          .singer-name
            padding-left 0.3rem
</style>
