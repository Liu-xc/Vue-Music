<template>
  <div class="switch">
    <span v-for="(item, index) of tags" :key="index" @click.stop="handleSwitchClick(item)">{{item}}</span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'SwitchTags',
  data () {
    return {
      tags: ['推荐', '排行', '歌手']
    }
  },
  methods: {
    ...mapMutations([
      'changeHomeRouter'
    ]),
    handleSwitchClick (title) {
      this.$router.push({
        path: `/${title}`
      })
      this.changeHomeRouter(`/${title}`)
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~styles/var.styl'

.switch
  position fixed
  width 100%
  top $top-height
  height $switch-height
  background $bg-green
  display flex
  justify-content space-evenly
  align-items center
  font-size $font-size-large
  z-index 100
</style>
