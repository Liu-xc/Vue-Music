<template>
  <div class="recommend">
    <img-swiper :swiperItems="swiperItems" :options="swiperOptions" class="img-swiper"></img-swiper>
    <list-scroll>
      <div class="rec">
        <div class="rec-title">热门歌单推荐</div>
        <ul class="rec-list">
          <li class="rec-item">
            <img src="static/img/logo.png" class="disc-img" />
            <div class="disc-info">
              <span class="disc-name">纯音乐</span>
              <span class="disc-desc">适合学习或入睡听的歌单</span>
            </div>
          </li>
          <li class="rec-item">
            <img src="static/img/logo.png" class="disc-img" />
            <div class="disc-info">
              <span class="disc-name">纯音乐</span>
              <span class="disc-desc">适合学习或入睡听的歌单</span>
            </div>
          </li>
          <li class="rec-item">
            <img src="static/img/logo.png" class="disc-img" />
            <div class="disc-info">
              <span class="disc-name">纯音乐</span>
              <span class="disc-desc">适合学习或入睡听的歌单</span>
            </div>
          </li>
          <li class="rec-item">
            <img src="static/img/logo.png" class="disc-img" />
            <div class="disc-info">
              <span class="disc-name">纯音乐</span>
              <span class="disc-desc">适合学习或入睡听的歌单</span>
            </div>
          </li>
          <li class="rec-item">
            <img src="static/img/logo.png" class="disc-img" />
            <div class="disc-info">
              <span class="disc-name">纯音乐</span>
              <span class="disc-desc">适合学习或入睡听的歌单</span>
            </div>
          </li>
          <li class="rec-item">
            <img src="static/img/logo.png" class="disc-img" />
            <div class="disc-info">
              <span class="disc-name">纯音乐</span>
              <span class="disc-desc">适合学习或入睡听的歌单</span>
            </div>
          </li>
          <li class="rec-item">
            <img src="static/img/logo.png" class="disc-img" />
            <div class="disc-info">
              <span class="disc-name">纯音乐</span>
              <span class="disc-desc">适合学习或入睡听的歌单</span>
            </div>
          </li>
        </ul>
      </div>
    </list-scroll>
  </div>
</template>

<script>
import ImgSwiper from 'comp/basic/ImgSwiper'
import ListScroll from 'comp/basic/ListScroll'
export default {
  name: 'Recommend',
  data () {
    return {
      swiperItems: ['static/img/logo.png', 'static/img/logo.png', 'static/img/logo.png'],
      swiperOptions: {
        autoplay: {
          disableOnInteraction: false
        },
        loop: true
      }
    }
  },
  components: {
    ImgSwiper,
    ListScroll
  }
}
</script>

<style scoped lang="stylus">
@import '~styles/var.styl'

.img-swiper
  width 90%
  padding 0.2rem 0

.recommend
  background $bg-green-ll

.rec
  color $bg-dark-blue

  .rec-title
    padding 0.3rem 0
    text-align center
    font-size $font-size-large-x

  .rec-item
    display flex
    padding 0.1rem 0.2rem

    .disc-img
      width 1.4rem

    .disc-info
      flex 1
      display flex
      flex-direction column
      padding 0 0.3rem

      .disc-name
        padding 0.2rem 0 0.3rem
        font-size $font-size-large

      .disc-desc
        color $bg-dark-blue-l
        font-size $font-size-medium-x
</style>
