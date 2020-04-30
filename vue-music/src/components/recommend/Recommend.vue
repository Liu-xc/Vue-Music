<template>
  <div>
    <img-swiper :swiperItems="swiperItems" :options="swiperOptions"></img-swiper>
  </div>
</template>

<script>
import ImgSwiper from 'comp/basic/ImgSwiper'
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
    ImgSwiper
  }
}
</script>

<style scoped lang="stylus">
@import '~styles/var.styl'

.swiper-pagination
  color $bg-dark-blue
  bottom -1rem
</style>
