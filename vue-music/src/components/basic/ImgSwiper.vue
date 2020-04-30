<template>
  <swiper :options="swiperOptions" class="swiper-container">
    <swiper-slide v-for="(item, index) of swiperItems" :key="index">
      <a href>
        <img :src="item" />
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'ImgSwiper',
  props: {
    swiperItems: Array,
    options: {
      type: Object,
      default () {
        return {
          autoplay: {
            disableOnInteraction: false
          },
          loop: true
        }
      }
    }
  },
  computed: {
    swiperOptions () {
      return Object.assign({
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        paginationType: 'fraction'
      }, this.options)
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~styles/var.styl'

.swiper-pagination
  position absolute
  bottom 0.3rem
</style>
