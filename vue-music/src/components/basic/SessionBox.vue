<template>
  <div class="session-bg" @click.stop="handleCancleClick">
    <div class="session-box">
      <div class="session-text">确定这样做吗</div>
      <div class="btns">
        <div class="btn" @click.stop="handleComfirmedClick">确认</div>
        <div class="btn" @click.stop="handleCancleClick">取消</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SessionBox',
  methods: {
    handleComfirmedClick () {
      this.$emit('comfirmed')
    },
    handleCancleClick () {
      this.$emit('cancle')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/var.styl'

.session-bg
  full-screen-container()
  position fixed
  display flex
  justify-content center
  align-items center
  backdrop-filter blur(5px) brightness(110%)
  z-index 1000

  .session-box
    width 60%
    background $bg-white
    color $bg-dark-blue
    border-radius 0.3rem
    z-index 1000

    .session-text
      padding 0.6rem 0 0.3rem
      text-align center
      font-size $font-size-large

    .btns
      display flex

      .btn
        flex 1
        text-align center
        font-size $font-size-medium-x
        padding 0.2rem 0
</style>
