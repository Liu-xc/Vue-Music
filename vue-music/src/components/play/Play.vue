<template>
  <div class="play">
    <div class="play-header">
      <span class="iconfont icon-fanhui" @click.stop="handleBackClick"></span>
      <div class="header-title">Music</div>
    </div>
    <div class="play-main">
      <swiper :options="swiperOptions" class="swiper-container">
        <swiper-slide class="disc-page">
          <disc></disc>
        </swiper-slide>
        <swiper-slide class="lyric-page">
          <lyric></lyric>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="play-bottom">
        <div class="progree-bar"></div>
        <div class="controler">
          <div class="play-list-ctrl">
            <span class="iconfont" :class="playModeIcon"></span>
            <span class="iconfont icon-xin1"></span>
            <span class="iconfont icon-yinpinliebiao"></span>
          </div>
          <div class="play-ctrl">
            <span class="iconfont icon-shangyishou"></span>
            <span class="iconfont" :class="playIcon"></span>
            <span class="iconfont icon-xiayishou"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import Disc from './components/Disc'
import Lyric from './components/Lyric'
import { modeDesc } from '@/common/playmode.js'
export default {
  name: 'Paly',
  data () {
    return {
      swiperOptions: {
        autoplay: false,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        paginationType: 'fraction'
      }
    }
  },
  computed: {
    ...mapGetters([
      'playMode',
      'playState'
    ]),
    playIcon () {
      return this.playState ? 'icon-zanting' : 'icon-bofang'
    },
    playModeIcon () {
      return modeDesc[this.playMode + ''].mode_icon_class
    }
  },
  components: {
    Disc,
    Lyric
  },
  methods: {
    ...mapMutations([
      'toggleBottomPlayer'
    ]),
    handleBackClick () {
      this.$router.back(-1)
      this.toggleBottomPlayer()
    }
  },
  mounted () {
    this.toggleBottomPlayer()
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/var.styl'

.play
  full-screen-container()
  color $bg-dark-blue
  display flex
  flex-direction column
  overflow hidden

  .play-header
    padding 0.2rem 0
    background $bg-green-l

    .iconfont
      position absolute
      font-size $font-size-large
      padding-left 0.2rem

    .header-title
      text-align center

  .play-main
    flex 1

    .swiper-container
      height 75%

      .swiper-pagination
        position absolute
        bottom 0rem

    .play-bottom
      height 25%
      display grid
      grid-template-rows 2fr 5fr
      background linear-gradient(top, $bg-green-ll, $bg-dark-blue-l)
      box-shadow 0 -7px 15px $bg-green-ll

      .controler
        display grid
        grid-template-rows 3fr 5fr

        .play-list-ctrl, .play-ctrl
          display grid
          grid-template-columns 1fr 1fr 1fr
          justify-items center
          align-items center

        .play-list-ctrl
          .icon-xunhuan7, .icon-suiji3, .icon-xunhuan5
            font-size 26px
            font-weight 600

          .icon-xin1
            font-weight 600
            font-size 20px

          .icon-yinpinliebiao
            font-weight 600
            font-size 27px

        .play-ctrl
          font-weight 400

          .icon-shangyishou, .icon-xiayishou
            font-size 1.1rem

          .icon-zanting, .icon-bofang
            font-size 1.3rem
</style>
